import React, { Component, Fragment } from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { connect } from 'react-redux';
import { getEarthquakes } from '../actions/earthquakeActions';
import PropTypes from 'prop-types';

class EarthquakesList extends Component {
  static propTypes = {
    getEarthquakes: PropTypes.func.isRequired,
    earthquake: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getEarthquakes();
  }

  render() {
    const { earthquakes } = this.props.earthquake;

    const earthquakeList = []

    for (const [index, earthquake] of earthquakes.entries()) {
      earthquakeList.push(
      <ListGroupItem key={earthquake.eqid}>
        <ListGroupItemHeading>
          {index + 1}. Magnitude: <b>{earthquake.magnitude}</b> at latitude: <i>{earthquake.lat}</i>, longitude: <i>{earthquake.lng}</i>
        </ListGroupItemHeading>
        <ListGroupItemText>
          Date: {new Date(earthquake.datetime).toLocaleString('en-Mx', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })}, Depth: {earthquake.depth}
        </ListGroupItemText>
      </ListGroupItem>
      )
    }

    return (
    <Fragment>
        <Container>
          <Row>
            <Col>
              <ListGroup>
                {earthquakeList}
              </ListGroup>
            </Col>
          </Row>
        </Container>
    </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  earthquake: state.earthquake
});

export default connect(mapStateToProps, { getEarthquakes })(EarthquakesList);