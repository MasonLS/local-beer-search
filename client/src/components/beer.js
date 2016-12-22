import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';





export default class Beer extends Component {

    render() {
        return (
            <li className="list-group-item">
                <Row>
                    <Col md={2}>
                        <Image src={this.props.beer.labelIcon} />
                    </Col>
                    <Col md={4}>
                        <a>{this.props.beer.name}</a>
                    </Col>
                    <Col md={4}>
                        <p>Brewery: {this.props.beer.brewery.name}</p>
                        <p>Style: {this.props.beer.style}</p>
                    </Col>
                    <Col md={2}>
                        <p>IBU: {this.props.beer.ibu || 'N/A'}</p>
                        <p>ABV: {this.props.beer.abv}</p>
                    </Col>
                </Row>
            </li>
        );
    }
}