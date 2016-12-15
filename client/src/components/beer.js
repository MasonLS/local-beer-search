import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';





export default class Beer extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <li className="list-group-item">
                <Row>
                    <Col md={2}>
                        <Image src={this.props.info.labels.icon} />
                    </Col>
                    <Col md={4}>
                        <a>{this.props.info.name}</a>
                    </Col>
                    <Col md={4}>
                        <p>Brewery: {this.props.info.breweries[0].name}</p>
                        <p>Style: {this.props.info.style.name}</p>
                    </Col>
                    <Col md={2}>
                        <p>IBU: {this.props.info.ibu || 'N/A'}</p>
                        <p>ABV: {this.props.info.abv}</p>
                    </Col>
                </Row>
            </li>
        );
    }
}