import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { postLocation } from '../actions/locationActions';
import PropTypes from 'prop-types';

class LocationForm extends Component {
  static propTypes = {
    postLocation: PropTypes.func.isRequired
  }
  
  state = {
    location: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = {
      location: this.state.location
    }

    // Post Location via postLocation action
    this.props.postLocation(newLocation);

    // Reset the state, to blank the input
    this.setState({
      location: ''
    });
  }

  render() {
    return (
      <Fragment>
        <Container className="mb-3">
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>

                    <Form inline onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="location" className="mr-sm-2">Location</Label>
                            <Input 
                              onChange={this.handleChange}
                              value={this.state.location} 
                              type="text" 
                              name="location" 
                              id="location"
                              placeholder="Enter a location"
                            />
                        </FormGroup>
                        <Button
                          color="dark"
                        >Search</Button>
                    </Form>

                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, { postLocation })(LocationForm);
