import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class BeerFilters extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" placeholder="Anything" value={this.props.filters.name} onChange={e => this.props.filterBeers({ name: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Style</ControlLabel>
                    <FormControl componentClass="select" placeholder="All" value={this.props.filters.style} onChange={e => this.props.filterBeers({ style: e.target.value })}>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Abv Lower Bound</ControlLabel>
                    <FormControl componentClass="select" value={this.props.filters.abv.lower} onChange={e => this.props.filterBeers({ abv: {...this.props.filters.abv, lower: e.target.value }})}>
                        <option value="None">None</option>
                        <option value="2">2%</option>
                        <option value="4">4%</option>
                        <option value="6">6%</option>
                        <option value="8">8%</option>
                        <option value="10">10%</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Abv Upper Bound</ControlLabel>
                    <FormControl componentClass="select" value={this.props.filters.abv.upper} onChange={e => this.props.filterBeers({ abv: {...this.props.filters.abv, upper: e.target.value}})}>
                        <option value="None">None</option>
                        <option value="4">4%</option>
                        <option value="6">6%</option>
                        <option value="8">8%</option>
                        <option value="10">10%</option>
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}

export default BeerFilters;