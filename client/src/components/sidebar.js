import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import BreweryFilters from './brewery-filters';
import BeerFilters from './beer-filters';

const styles = {
    sidebar: {
        backgroundColor: 'white',
        position: 'fixed'
    }
}

class Sidebar extends Component {
    render() {
        let filters = <BreweryFilters filterBreweries={this.props.filterBreweries} />;

        if (this.props.find === 'Beers') {
            filters = <BeerFilters filterBeers={this.props.filterBeers} />;
        }

        return (
            <Col md={3} style={styles.sidebar}>
                <Form>
                    <FormGroup>
                        <ControlLabel>Find</ControlLabel>
                        <FormControl componentClass="select" placeholder="Breweries" onChange={e => this.props.changeFind(e.target.value)}>
                            <option value="Breweries">Breweries</option>
                            <option value="Beers">Beers</option>
                        </FormControl>
                    </FormGroup>
                    {filters}
                </Form>
            </Col>
        );
    }
}


export default Sidebar;