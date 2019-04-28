import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {

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

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
    <div>
        <Map
          google={this.props.google}
          zoom={5}
          style={mapStyles}
          initialCenter={{
            lat: 19.4326,
            lng: -99.1332
          }}
        >

          <Marker
            onClick={this.onMarkerClick}
            name={'Mexico City'}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
    </div>
    )
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyBLQrXr8H-nChVEiIMpi3xaCinHaBKyv5A' })(MapContainer);
