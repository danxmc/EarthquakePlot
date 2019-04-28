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

    return (
    <Fragment>
        <Container>
          <Row>
            <Col>
              <ListGroup>

              { earthquakes.map(({ eqid, magnitude, lat, lng, datetime, depth }) => (
                  <ListGroupItem>
                    <ListGroupItemHeading>
                      Magnitude: <b>{magnitude}</b> at latitude: <i>{lat}</i>, longitude: <i>{lng}</i>
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Date: {datetime}, Depth: {depth}
                    </ListGroupItemText>
                  </ListGroupItem>
                ))}

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