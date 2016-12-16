import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';



export default class Brewery extends Component {

    componentDidMount() {
        const uri = '/api/brewery/' + this.props.brewery.breweryId + '/beers';
        fetch(uri, {
            accept: 'application/json'
        })
        .then(response => response.json())
        .then(response => {
            const beers = response.data;
            this.props.addBeers(beers);
        });
    }

    render() {
        return (
            <a className="list-group-item">
                <Row>
                    <Col md={2}>
                        <Image src={''} />
                    </Col>
                    <Col md={4}>
                        {this.props.brewery.brewery.name}
                    </Col>
                </Row>
            </a> 
        );
    }
}