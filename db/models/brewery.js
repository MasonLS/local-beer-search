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
                return db.client().hmsetAsync('brewery:' + brewery.id, db.pruneObject(brewery));        
            }
        })
        .catch(db.error);
}

function addBeer(breweryId, beerId) {
    return db.client().saddAsync(breweryId + ':beers', beerId)
        .catch(db.error);
}

function getByDistance(coords, radius) {
    const radiusInMeters = radius*1609.34;
    
    return db.client().smembersAsync('breweries')
        .then(breweryIds => {
            return Promise.map(breweryIds, breweryId => {
                return db.client().hgetallAsync('brewery:' + breweryId);
            });
        })
        .then(breweries => {
            return breweries.filter(brewery => {
                return (brewery.latitude !== undefined && brewery.longitude !== undefined)
                    && (brewery.latitude !== 'undefined' && brewery.longitude !== 'undefined')
                    && (brewery.latitude !== '' && brewery.longitude !== '');
            });
        })
        .then(breweries => {
            return breweries.filter(brewery => {
                const distanceInMeters = geolib.getDistance(coords, { 
                    latitude: brewery.latitude, 
                    longitude: brewery.longitude 
                });

                if (distanceInMeters <= radiusInMeters) {
                    const distanceInMiles = distanceInMeters/1609.34;
                    brewery.distance = distanceInMiles;
                }
                return distanceInMeters <= radiusInMeters;
            });
        })
        .catch(db.error);
}

export default {
    get,
    add,
    addBeer,
    getByDistance
}