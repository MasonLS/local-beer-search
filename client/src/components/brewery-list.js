import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Brewery from './brewery';

class BreweryList extends Component {
    render() {
        return (
            <ListGroup>
                {this.props.breweries.map(brewery => <Brewery brewery={brewery} key={brewery.id} goToBrewery={this.props.goToBrewery}/>)}
            </ListGroup>
        );
    }
}

export default BreweryList;