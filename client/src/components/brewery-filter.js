import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';


class BreweryFilter extends Component {
    render() {
        return (
            <Form inline>
                <FormGroup controlId="name">
                    <ControlLabel>Breweries named</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="Anything" onChange={e => this.props.filterBreweries({ name: e.target.value })} />
                </FormGroup>
                {' '}
                <FormGroup controlId="distance">
                    <ControlLabel>within</ControlLabel>
                    {' '}
                    <FormControl componentClass="select" placeholder="10" onChange={e => this.props.filterBreweries({ distance: e.target.value })}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </FormControl>
                    {' '}
                    <ControlLabel>miles</ControlLabel>
                </FormGroup>
            </Form>
        );
    }
}


export default BreweryFilter;