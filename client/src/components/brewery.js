import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';



export default class Brewery extends Component {

    render() {
        return (
            <a className="list-group-item" onClick={() => this.props.selectBrewery(this.props.brewery.id)}>
                <Row>
                    <Col md={8}>
                        <p>
                            {this.props.brewery.name}
                        </p>
                        <p>
                            {this.props.brewery.distance.toPrecision(2) + ' miles away'}
                        </p>
                    </Col>
                    <Col md={4}>
                        <Image src={this.props.brewery.imageIcon} />
                    </Col>
                </Row>
            </a> 
        );
    }
}