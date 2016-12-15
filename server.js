'use strict';

import Express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import path from 'path';
import request from 'request';

const app = Express();

const apiKey = '5fdb7de894515e9cc58fd0ca8fe9f5db';
const testUrl = 'http://api.brewerydb.com/v2/beers/?key=' + apiKey + '&abv=8,10&hasLabels=Y&withBreweries=Y';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let testBody;

app.get('/api', (req, res, next) => {
    if (testBody === undefined) {
        request.get(testUrl, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                testBody = body;
                res.json(body); 
            } else {
                console.log(chalk.red('Error retrieving from brewerydb api:', error));
            }
        });
    } else {
        res.json(testBody);
    }
});

app.listen(3001, () => {
    console.log(chalk.cyan('Server listening on port 3001...'));
});