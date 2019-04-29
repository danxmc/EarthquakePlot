import React, { Component, Fragment } from 'react';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { earthquakes } = this.props.location;

    const earthquakeMarkers = []

    for (const earthquake of earthquakes) {
      earthquakeMarkers.push([
        <Marker
          key={earthquake.eqid}
          onClick={this.onMarkerClick}
          name={earthquake.magnitude}
          position={{
            lat: earthquake.lat, 
            lng: earthquake.lng 
          }}
        />,

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <Card>
            <CardHeader>Magnitude: {this.state.selectedPlace.name}</CardHeader>
            <CardBody>
              <CardTitle>Depth: {earthquake.depth}</CardTitle>
              <CardSubtitle>Date: {new Date(earthquake.datetime).toLocaleString('en-Mx',{weekday: 'short', day:'numeric',  month: 'short', year: 'numeric', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric'})}</CardSubtitle>
              <CardText></CardText>
            </CardBody>
          </Card>
          
        </InfoWindow>
      ])
    }

    return (
      <Fragment>
        <Map
          google={this.props.google}
          zoom={5}
          style={mapStyles}
          onClick={this.onMapClick}
          initialCenter={{
            lat: 19.4326,
            lng: -99.1332
          }}
          onReady={this.fetchPlaces}
        >
          {earthquakeMarkers}
        </Map>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps, {})(GoogleApiWrapper({ apiKey: 'AIzaSyBLQrXr8H-nChVEiIMpi3xaCinHaBKyv5A' })(MapContainer));
