import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import initialState from '../store/state';

class BeerFilters extends Component {
    componentDidMount() {
        this.props.filterBeers({...initialState.beers.activeFilters});
    }

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
                        <option value="all">All</option>
                        <option value="lager">Lager</option>
                        <option value="pilsener">Pilsener</option>
                        <option value="ale">Ale</option>
                        <option value="pale ale">Pale Ale</option>
                        <option value="imperial pale ale">IPA</option>
                        <option value="porter">Porter</option>
                        <option value="stout">Stout</option>
                        <option value="barleywine">Barleywine</option>
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