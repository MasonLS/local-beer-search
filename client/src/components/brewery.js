import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

class Brewery extends Component {

    render() {
        return (
            <Link to={'brewery/' + this.props.brewery.id} className="list-group-item">
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
            </Link>
        );
    }
}

export default Brewery;