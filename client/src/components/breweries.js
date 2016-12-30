import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BreweryListContainer from '../containers/brewery-list';
import BreweryFiltersContainer from '../containers/brewery-filters';

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
                    <Col sm={12}>
                        <BreweryListContainer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Breweries;