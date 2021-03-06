import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Beer from './beer';

const BeerList = ({
    beers
}) => (
    <ListGroup>
        {beers.map(beer => <Beer beer={beer} key={beer.id} />)}
    </ListGroup>
)

export default BeerList;