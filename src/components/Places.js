import React, { Component } from 'react';
import PlacesList from './PlacesList';
import PlacesMap from './PlacesMap';

export default class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      modalOpen: true,
    };
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleAddressChange = address => {
    this.setState({address: address});
  };

  render() {
    const { name, address, modalOpen } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <PlacesList
            handleChange={this.handleChange} 
            handleAddressChange={this.handleAddressChange}
            name={name}
            address={address}  />
          <PlacesMap />
        </div>
      </div>
    );
  };
};
