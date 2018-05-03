import React, { Component } from 'react';
import PlacesList from './PlacesList';
import PlacesMap from './PlacesMap';

export default class Places extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <PlacesList />
          <PlacesMap />
        </div>
      </div>
    );
  };
};
