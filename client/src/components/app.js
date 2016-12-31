import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import beerPic from '../beer.jpg';
import BreweriesContainer from '../containers/breweries';
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
            <BreweriesContainer />
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
