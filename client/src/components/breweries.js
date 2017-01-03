import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BreweryList from './brewery-list';
import BreweryFiltersContainer from '../containers/brewery-filters';
import BreweryMap from './brewery-map';

class Breweries extends Component {
    render() {
        return (
            <Col sm={12}>
                <Row>
                    <Col sm={4}>
                        <BreweryMap center={this.props.mapCenter} breweries={this.props.breweries} fetchBreweries={this.props.fetchBreweries} filterBreweries={this.props.filterBreweries}/>
                    </Col>
                    <Col sm={8}>
                        <Row>
                            <Col sm={12}>
                                <BreweryFiltersContainer />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <BreweryList breweries={this.props.breweries} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Breweries;