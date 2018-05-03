import React, { Component } from 'react';
import PlacesList from './PlacesList';
import PlacesMap from './PlacesMap';

export default class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
    };
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const { name } = this.state;

    return (
      <div className="container">
        <div className="row">
          <PlacesList handleChange={this.handleChange} />
          <PlacesMap />
        </div>
      </div>
    );
  };
};
