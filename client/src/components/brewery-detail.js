import React, { Component } from 'react';
import { Panel, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

function convertNewLines(text) {
    let lines = text.split('\r\n');
    let elements = [];
    for (let i=0; i<lines.length; i++) {
        elements.push(lines[i]);
        if (i < lines.length-1) {
            elements.push(<br key={i}/>);
        }
    }
    return elements;
}

class BreweryDetail extends Component {
    render() {
        const brewery = this.props.breweriesById[this.props.params.id];
        const address = <p>{brewery.streetAddress}<br/>{`${brewery.locality}, ${brewery.region} ${brewery.postalCode}`}</p>;

        return (
            <Panel>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col md={12}>
                                <h2>{brewery.name}</h2>                    
                                <h4>Description</h4>
                                <p>{brewery.description}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                {address}
                            </Col>
                            <Col md={4}>
                                <p>{convertNewLines(brewery.hoursOfOperation)}</p>
                            </Col>
                            <Col md={4}>
                                <p><a href={brewery.website}>{brewery.website}</a></p>
                                <Link to={'beers'} onClick={() => this.props.filterBeers(this.props.params.id)}>Beers</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Image src={brewery.imageMedium} />
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default BreweryDetail;