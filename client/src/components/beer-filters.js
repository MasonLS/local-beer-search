import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class BeerFilters extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" placeholder="Anything" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Style</ControlLabel>
                    <FormControl componentClass="select" placeholder="All">
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Abv</ControlLabel>
                    <FormControl componentClass="select" placeholder="Any">
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}

export default BeerFilters;