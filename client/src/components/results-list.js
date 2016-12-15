import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Beer from './beer';
import Brewery from './brewery';

function beerOrBrewery(result) {
    if (result.abv !== undefined) {
        return <Beer info={result} key={result.id} />
    } else {
        return <Brewery info={result} key={result.id} />
    }
}

const ResultsList = ({
    results
}) => (
    <ListGroup>
        {results.map(beerOrBrewery)}
    </ListGroup>
)

export default ResultsList;