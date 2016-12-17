import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from './beer.jpg';
import BreweryList from './components/brewery-list';
import BeerList from './components/beer-list';
import update from 'react-addons-update';

const styles = {
  header: {
    backgroundImage: 'url(' + beerPic + ')'
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      breweries: [],
      beers: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const uri = '/api/search/geo/point?lat=' + coords.latitude + '&lng=' + coords.longitude;
      fetch(uri, {
        accept: 'application/json'
      })
      .then(response => response.json())
      .then(response => {
        console.log(response.data);
        const breweries = response.data;
        this.setState({ breweries });
      })
      .catch(err => {
        console.log('There was an error fetching from API:' + err.message);
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.beers.length === this.state.beers.length;
  }

  addBeers(beers) {
    let newBeers = update(this.state.beers, { $push: [...beers] });
    this.setState({ beers: newBeers });
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col sm={12}>
            <Jumbotron style={styles.header}>
              <h1>Hello World!</h1>
              {/*<Search />*/}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <BreweryList breweries={this.state.breweries} addBeers={this.addBeers.bind(this)} />
          </Col>
          <Col md={8}>
            <BeerList beers={this.state.beers} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
