import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import initialState from '../store/state';

class BreweryFilter extends Component {
    componentDidMount() {
        this.props.filterBreweries({...initialState.breweries.activeFilters});
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" placeholder="Anything" value={this.props.filters.name} onChange={e => this.props.filterBreweries({ ...this.props.filters, name: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Distance</ControlLabel>
                    <FormControl componentClass="select" value={this.props.filters.distance} onChange={e => {
                                this.props.filterBreweries({ ...this.props.filters, distance: e.target.value });
                                this.props.fetchBreweries(this.props.filters.coords, e.target.value);
                            }}>
                        <option value="5">5 miles</option>
                        <option value="10">10 miles</option>
                        <option value="20">20 miles</option>
                        <option value="50">50 miles</option>
                        <option value="100">100 miles</option>
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}


export default BreweryFilter;