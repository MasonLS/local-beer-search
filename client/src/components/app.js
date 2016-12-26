import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import beerPic from '../beer.jpg';
import SidebarContainer from '../containers/sidebar';
import router from '../store/router';

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
            {router(this.props.history.currentState)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
