import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';



export default class Brewery extends Component {

    render() {
        return (
            <a className="list-group-item">
                <Row>
                    <Col md={2}>
                        <Image src={''} />
                    </Col>
                    <Col md={4}>
                        {this.props.brewery.name}
                    </Col>
                </Row>
            </a> 
        );
    }
}