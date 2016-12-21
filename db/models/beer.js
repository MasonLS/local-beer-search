import db from '../db';
import Promise from 'bluebird';
import Brewery from './brewery';

function add(beer) {
    return db.client().hmsetAsync('beer:' + beer.id, db.pruneObject(beer))
        .catch(db.error);
}

function getForBrewery(breweryId) {
    return db.client().smembersAsync(breweryId + ':beers')
        .then(beerIds => {
            return Promise.map(beerIds, beerId => {
                return db.client().hgetallAsync('beer:' + beerId);
            });
        })
        .catch(db.error);
}

export default {
    add,
    getForBrewery
}