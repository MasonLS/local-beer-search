import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


class BreweryFilter extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" placeholder="Anything" onChange={e => this.props.filterBreweries({ name: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Distance</ControlLabel>
                    <FormControl componentClass="select" defaultValue={'10'} onChange={e => this.props.filterBreweries({ distance: e.target.value })}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}


export default BreweryFilter;