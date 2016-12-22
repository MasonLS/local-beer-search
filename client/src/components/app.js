import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from '../beer.jpg';
import BreweryListContainer from '../containers/brewery-list';
import BeerListContainer from '../containers/beer-list';

const styles = {
  header: {
    backgroundImage: 'url(' + beerPic + ')'
  }
};

class App extends Component {

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
            <BreweryListContainer />
          </Col>
          <Col md={8}>
            <BeerListContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
