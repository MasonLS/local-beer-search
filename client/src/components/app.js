import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from '../beer.jpg';
import BreweryListContainer from '../containers/brewery-list';
import BeerListContainer from '../containers/beer-list';
import SidebarContainer from '../containers/sidebar';

const styles = {
  header: {
    backgroundImage: 'url(' + beerPic + ')'
  }
};

class App extends Component {
  render() {
    let list = <BreweryListContainer />
    if (this.props.find === 'Beers') {
      list = <BeerListContainer />
    }
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
          <SidebarContainer />
          <Col md={9} mdOffset={3}>
            {list}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
