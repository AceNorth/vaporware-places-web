import React, { Component } from 'react';
import PlacesList from './PlacesList';
import PlacesMap from './PlacesMap';

export default class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  handleSubmitPlace = (place) => {
    let params = {
      ...place,
      id: Math.random(),
    };

    this.props.createPlace(params);
  }

  render() {
    const { name, address } = this.state;
    const { places } = this.props;

    return (
      <div className='container'>
        <div className='row'>
          <PlacesList
            submitPlace={this.handleSubmitPlace}
            places={places}/>
          <PlacesMap />
        </div>
      </div>
    );
  };
};
