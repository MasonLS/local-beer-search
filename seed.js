import db from './db/db';
import Beer from './db/models/beer';
import Brewery from './db/models/brewery';
import rp from 'request-promise';
import Promise from 'bluebird';
import chalk from 'chalk';

const apiKey = '5fdb7de894515e9cc58fd0ca8fe9f5db';
const apiBaseUrl = 'http://api.brewerydb.com/v2';

db.connect(db.MODE_PRODUCTION);


function fetchAllBeers(totalPages) {
    
    function fetchRecursively(pageNum) {
        if (pageNum > totalPages) {
            return;
        }
        return fetchPage(pageNum)
            .then(() => {
                console.log('Page ' + pageNum + ' of ' + totalPages + ' successfully fetched!');
            })
            .then(() => {
                return fetchRecursively(pageNum + 1);
            });
    }

    return fetchRecursively(2);
}

function fetchPage(pageNum) {
    const options = {
        method: 'GET',
        uri: apiBaseUrl + '/beers',
        qs: {
            key: apiKey,
            withBreweries: 'Y',
            p: pageNum
        },
        json: true
    }
    return rp(options)
        .then(response => {
            return Promise.map(response.data, beer => {
                return processBeer(beer);
            })
            .then(() => response);
        });
}

function processBrewery(brewery, beerId) {
    if (brewery.locations && brewery.locations.length > 0 && brewery.locations[0].isClosed !== 'Y') {
        brewery.latitude = brewery.locations[0].latitude || '';
        brewery.longitude = brewery.locations[0].longitude || '';
        brewery.streetAddress = brewery.locations[0].streetAddress || '';
        brewery.extendedAddress = brewery.locations[0].extendedAddress || '';
        brewery.locality = brewery.locations[0].locality || '';
        brewery.region = brewery.locations[0].region || '';
        brewery.postalCode = brewery.locations[0].postalCode || '';
        brewery.country = brewery.locations[0].country.displayName || '';
        brewery.hoursOfOperation = brewery.locations[0].hoursOfOperation || '';
        brewery.phone = brewery.locations[0].phone || '';
        brewery.type = brewery.locations[0].locationType || '';
    }
    
    if (brewery.images) {
        brewery.imageIcon = brewery.images.icon;
        brewery.imageMedium = brewery.images.squareMedium;
        brewery.imageLarge = brewery.images.squareLarge;
    }

    return Brewery.add(brewery)
        .then(() => Brewery.addBeer(brewery.id, beerId));
}

function processBeer(beer) {
    if (beer.breweries) {
        return Promise.map(beer.breweries, brewery => processBrewery(brewery, beer.id))
            .then(() => {
                if (beer.availability) {
                    beer.availability = beer.available.name;
                }

                if (beer.style) {
                    beer.style = beer.style.name;
                }

                if (beer.labels) {
                    beer.labelIcon = beer.labels.icon;
                    beer.labelMedium = beer.labels.medium;
                    beer.labelLarge = beer.labels.large;
                }

                if (beer.glass) {
                    beer.glass = beer.glass.name;
                }

                return Beer.add(beer);
            });
    } else {
        return Beer.add(beer);
    }
}

fetchPage(1)
    .then(response => fetchAllBeers(response.numberOfPages))
    .then(() => {
        console.log(chalk.green('Seed completed successfully!'));
    })
    .catch(error => {
        console.log(chalk.red('Error: ' + error.message));
    });