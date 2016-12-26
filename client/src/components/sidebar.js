import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Panel } from 'react-bootstrap';
import BreweryFilters from './brewery-filters';
import BeerFilters from './beer-filters';

const styles = {
    sidebar: {
        // backgroundColor: 'white',
    }
}

class Sidebar extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            this.props.filterBreweries({ coords });
            this.props.fetchBreweries(coords, 10);
       });
    }

    render() {
        let filters = <BreweryFilters filterBreweries={this.props.filterBreweries} fetchBreweries={this.props.fetchBreweries} filters={this.props.breweryFilters} />;

        if (this.props.history.currentState.name === 'beers') {
            filters = <BeerFilters filterBeers={this.props.filterBeers} filters={this.props.beerFilters } />;
        }

        return (
            <Panel style={styles.sidebar}>
                <Form>
                    <FormGroup>
                        <ControlLabel>Find</ControlLabel>
                        <FormControl componentClass="select" value={this.props.history.currentState.name} onChange={e => {
                            this.props.changeFind({ name: e.target.value });
                        }}>
                            <option value="breweries">Breweries</option>
                            <option value="beers">Beers</option>
                        </FormControl>
                    </FormGroup>
                    {filters}
                </Form>
            </Panel>
        );
    }
}


export default Sidebar;