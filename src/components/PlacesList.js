import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export default class PlacesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleAddressChange = address => {
    this.setState({address: address});
  };

  submitPlace = () => {
    this.props.submitPlace(this.state);
    this.setState({name: '', address: ''});
  }

  render() {
    return (
      <div className="col-md-3">
        <h2>Places List</h2>
        <input
          className="form-control"
          style={{marginBottom: "15px"}}
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
          placeholder="Place name..." />
        <PlacesAutocomplete onChange={this.handleAddressChange} value={this.state.address}>
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <input
                {...getInputProps({
                placeholder: 'Search Places...',
                className: 'location-search-input form-control'
                })} />
              <div className='autocomplete-dropdown-container'>
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? 'suggestion-item-active' : 'suggestion-item';
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer'}
                    : { backgroundColor: '#fff', cursor: 'pointer' };

                  return (
                    <div {...getSuggestionItemProps(suggestion, {className, style})}>
                      <span>{suggestion.description}</span>
                    </div>
                    )
                })}
            </div>
          </div>
          )}
      </PlacesAutocomplete>
      <button
    className="btn btn-primary"
    style={{marginTop: "10px"}}
    onClick={this.submitPlace}>
      Add new
      </button>
      <hr />
      <div className="list-group">
        {this.props.places.map(place => (
          <div className="list-group-item" key={place.id}>
            <strong style={{fontSize: '16px'}}>{place.name}</strong>
            <p>{place.address}</p>
          </div>
          ))}
      </div>
    </div>
    )
  }
}
