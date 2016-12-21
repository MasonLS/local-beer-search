'use strict';

import Express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import path from 'path';
import db from './db/db';
import Brewery from './db/models/brewery';
import Beer from './db/models/beer';
import Promise from 'bluebird';

const app = Express();
db.connect(db.MODE_PRODUCTION);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/api/breweries/geopoint', (req, res, next) => {
    
    Brewery.getByDistance({
        lat: req.query.lat,
        lng: req.query.lng
    }, req.query.radius)
        .then(breweries => {
            return Promise.map(breweries, brewery => {
                return Beer.getForBrewery(brewery.id)
                    .then(beers => {
                        brewery.beers = beers;
                        return brewery;
                    });
            });
        })
        .then(breweriesWithBeers => {
            res.json(breweriesWithBeers);
        })
        .catch(next);
});


app.listen(3001, () => {
    console.log(chalk.cyan('Server listening on port 3001...'));
});