import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from '../beer.jpg';
import SidebarContainer from '../containers/sidebar';
import BreweryListContainer from '../containers/brewery-list';
import BeerListContainer from '../containers/beer-list';
import BreweryDetailContainer from '../containers/brewery-detail';
// import BeerDetailContainer from '../containers/beer-detail';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

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
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
          <SidebarContainer />
          </Col>
          <Col md={9}>
            <Router history={browserHistory}>
              <Route path="/">
                <IndexRoute component={BreweryListContainer} />
                <Route path="beers" component={BeerListContainer} />
                <Route path="brewery/:id" component={BreweryDetailContainer} />
              </Route>
            </Router>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
