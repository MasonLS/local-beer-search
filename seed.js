import db from './db/db';
import Beer from './db/models/beer';
import Brewery from './db/models/brewery';
import rp from 'request-promise';

const apiKey = '5fdb7de894515e9cc58fd0ca8fe9f5db';
const apiBaseUrl = 'http://api.brewerydb.com/v2';

db.connect(db.MODE_PRODUCTION);

const beers = [];

function fetchAllBeers() {
    let totalPages;

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

        rp(options)
            .then(response => {
                beers.push(...response.data);
                console.log('Num beers', beers.length);
                if (totalPages === undefined) {
                    totalPages = response.numberOfPages;
                }
                if (pageNum < totalPages) {
                    fetchPage(pageNum + 1);
                }
            })
            .catch(console.error);
    }

    fetchPage(1);
}

fetchAllBeers();