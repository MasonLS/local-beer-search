import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from '../beer.jpg';
import BreweriesContainer from '../containers/breweries';
import BeerListContainer from '../containers/beer-list';

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
          <Col sm={12}>
            <Jumbotron>
              <h1>Local Beer Search</h1>
              {/*<Search />*/}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <BreweriesContainer />
          <Col md={9}>
            <BeerListContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
