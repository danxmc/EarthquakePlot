import React, { Component } from 'react';
import LocationForm from "./LocationForm";
import LocationsMap from "./LocationsMap";


class Plotter extends Component {
  render() {
    return (
    <div>
      <LocationForm />
      <LocationsMap />
    </div>
    )
  }
}

export default Plotter;
