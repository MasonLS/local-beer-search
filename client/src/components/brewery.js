import React, { Component } from 'react';
import { Image, Row, Col, Panel, Button } from 'react-bootstrap';

class Brewery extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    toggleDetails(e) {
        e.preventDefault();
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <a href="#" className="list-group-item">
                    <Row>
                        <Col md={7}>
                            <p>
                                {this.props.brewery.name}
                            </p>
                            <p>
                                {this.props.brewery.distance.toPrecision(2) + ' miles away'}
                            </p>
                        </Col>
                        <Col md={3}>
                            <Image src={this.props.brewery.imageIcon} />
                        </Col>
                        <Col md={2}>
                            <Button onClick={this.toggleDetails.bind(this)}>Details</Button>
                        </Col>
                    </Row>
                </a>
                <Panel collapsible expanded={this.state.open}>
                    <p>{this.props.brewery.description}</p>
                </Panel>
            </div>
        );
    }
}

export default Brewery;