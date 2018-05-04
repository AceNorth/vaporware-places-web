import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const MapComponent = withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{lat: 35.783624, lng:  -78.647144}}
    />
))

export default MapComponent;
