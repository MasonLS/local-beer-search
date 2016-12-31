import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BreweryList from './brewery-list';
import BreweryFiltersContainer from '../containers/brewery-filters';
import BreweryMap from './brewery-map';

class Breweries extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <h3>Breweries</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <BreweryFiltersContainer />
                    </Col>
                </Row>
                <Row>
                    <BreweryMap center={this.props.mapCenter} breweries={this.props.breweries}/>
                </Row>
                <Row>
                    <Col sm={12}>
                        <BreweryList breweries={this.props.breweries} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Breweries;