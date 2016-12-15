import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from './beer.jpg';

const myHeaders = new Headers();

const myInit = { method: 'GET',
               headers: myHeaders,
               };

const styles = {
  header: {
    backgroundImage: 'url(' + beerPic + ')'
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    fetch('/api', {
      accept: 'application/json'
    })
      .then(response => response.json())
      .then(beers => {
        console.log(beers);
        this.setState({ beers });
      })
      .catch(err => {
        console.log('There was an error fetching from API:' + err.message);
      });
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
          <Col md={7}>
            {/*<BeerList />*/}
          </Col>
          <Col md={5}>
            {/*<Map />*/}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
