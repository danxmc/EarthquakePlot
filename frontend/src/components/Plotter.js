import React, { Component, Fragment } from 'react';
import LocationForm from "./LocationForm";
import LocationsMap from "./LocationsMap";

class Plotter extends Component {
  render() {
    return (
    <Fragment>
      <LocationForm />
      <LocationsMap />
    </Fragment>
    )
  }
}

export default Plotter;
