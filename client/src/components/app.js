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
          <BreweriesContainer />
        </Row>
      </Grid>
    );
  }
}

export default App;
