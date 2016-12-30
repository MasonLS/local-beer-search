import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from '../beer.jpg';
import Breweries from './breweries';
import Beers from './beers';

const styles = {
  header: {
    backgroundImage: 'url(' + beerPic + ')'
  }
};

class App extends Component {
  render() {
    return (
      <Grid fluid={true} style={styles.header}>
        <Row>
          <Col sm={6}>
            <Breweries />
          </Col>
          <Col sm={6}>
            <Beers />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
