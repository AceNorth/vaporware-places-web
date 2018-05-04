import React, { Component } from 'react';
import PlacesList from './PlacesList';
import PlacesMap from './PlacesMap';

export default class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      startingLocation: {
        lat: '',
        lng: '',
      },
    };
  };

  componentDidMount() {
    this.props.getPlaces();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos)
        this.setState({
          startingLocation: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }
        });
      });
    };
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleAddressChange = address => {
    this.setState({address: address});
  };

  handleSubmitPlace = () => {
    let place = {
      name: this.state.name,
      address: this.state.address,
      id: Math.floor(Math.random() * Math.floor(1000)),
    };

    this.props.createPlace(place);
    this.setState({
      name: '',
      address: '',
    });
  }

  render() {
    const { name, address } = this.state;
    const { places } = this.props;

    return (
      <div className='container'>
        <div className='row'>
          <PlacesList
            handleChange={this.handleChange}
            handleAddressChange={this.handleAddressChange}
            submitPlace={this.handleSubmitPlace}
            places={places}
            name={name}
            address={address}  />
          <PlacesMap />
        </div>
      </div>
    );
  };
};
