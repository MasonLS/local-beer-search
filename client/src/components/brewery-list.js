import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Brewery from './brewery';

const BreweryList = ({
    breweries,
    addBeers
}) => (
    <ListGroup>
        {breweries.map(brewery => <Brewery addBeers={addBeers} brewery={brewery} key={brewery.id} />)}
    </ListGroup>
)

export default BreweryList;