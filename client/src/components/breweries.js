import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BreweryList from './brewery-list';
import BreweryFilter from './brewery-filter';

class Breweries extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
           this.props.fetchInitialBreweries(coords, 10);
       });
    }
    render() {
        return (
            <Col md={3}>
                <Row>
                    <BreweryFilter filterBreweries={this.props.filterBreweries} />
                </Row>
                <Row>
                    <BreweryList breweries={this.props.breweries} selectBrewery={this.props.selectBrewery} />
                </Row>
            </Col>
        );
    }
}

export default Breweries;