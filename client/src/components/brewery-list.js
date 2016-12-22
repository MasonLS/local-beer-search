import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Brewery from './brewery';


class BreweryList extends Component {
    componentDidMount() {
       navigator.geolocation.getCurrentPosition(({ coords }) => {
           this.props.fetchInitialBreweries(coords, 10);
       });
    }

    render() {
        return (
            <ListGroup>
                {this.props.breweries.map(brewery => <Brewery brewery={brewery} key={brewery.id} />)}
            </ListGroup>
        );
    }
}

export default BreweryList;