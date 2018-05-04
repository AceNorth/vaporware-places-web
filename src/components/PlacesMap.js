import React from 'react';
import MapComponent from './GoogleMap';

const PlacesMap = props => (
  <div className="col-md-3">
    <h2>Places Map</h2>
    <MapComponent
      loadingElement={<h1 className='text-center'>Loading...</h1>}
      containerElement={<div style={{height: '100%', width: '100%'}} />}
      mapElement={<div style={{height: '100%', width: '100%'}} />}
    />
  </div>
)

export default PlacesMap;
