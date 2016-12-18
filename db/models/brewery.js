import db from '../db';
import Promise from 'bluebird';
import geolib from 'geolib';

function get(breweryId) {
    return db.client().hgetallAsync('brewery:' + breweryId);
}

function add(brewery) {
    return db.client().saddAsync('breweries', brewery.id)
        .then(res => {
            if (res === 1) {
                return db.client().hmsetAsync('brewery:' + brewery.id, brewery);        
            }
        })
        .catch(db.error);
}

function addBeer(breweryId, beerId) {
    return db.client().saddAsync(breweryId + ':beers', beers)
        .catch(db.error);
}

// takes a coordinates object and a radius in MILES, returns an array of IDs of breweries that are within range

function getByDistanceFromLocation(coords, radius) {
    const radiusInMeters = geolib.convertUnit('mi', radius);
    
    return db.client().smembersAsync('breweries')
        .then(breweryIds => {
            return Promise.map(breweryIds, breweryId => {
                return db.client.hgetallAsync('brewery:' + breweryId);
            });
        })
        .then(breweries => {
            return breweries.filter(brewery => {
                const distanceInMeters = geolib.getDistance(coords, { 
                    latitude: brewery.latitude, 
                    longitude: brewery.longitude 
                });

                return distanceInMeters <= radiusInMeters;
            });
        })
        .catch(db.error);
}

export default {
    get,
    add,
    addBeer,
    getByDistanceFromLocation
}