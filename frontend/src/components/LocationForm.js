import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LocationForm extends Component {
  
  state = {
    location: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Container className="mb-3">
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form inline onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="location" className="mr-sm-2">Location</Label>
                            <Input onChange={this.handleChange} type="text" name="location" id="location" placeholder="" />
                        </FormGroup>
                        <Button>Search</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default LocationForm;
