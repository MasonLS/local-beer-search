import React, { Component } from 'react';
import BeerFiltersContainer from '../containers/beer-filters';
import BeerListContainer from '../containers/beer-list';
import { Row, Col } from 'react-bootstrap';

class Beers extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <h3>Beers</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <BeerFiltersContainer />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <BeerListContainer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Beers;