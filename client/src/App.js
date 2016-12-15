import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from './beer.jpg';
import ResultsList from './components/results-list';

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
      .then(responseJson => {
        const results = JSON.parse(responseJson).data;
        console.log(results);
        this.setState({ beers: results });
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
          <Col md={8}>
            <ResultsList results={this.state.beers} />
          </Col>
          <Col md={4}>
            {/*<Map />*/}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
