import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export default({
  handleChange,
  handleAddressChange,
  name,
  address,
  places,
  submitPlace,
}) =>
  <div className="col-md-3">
    <h2>Places List</h2>
    <input
      className="form-control"
      style={{marginBottom: "15px"}}
      type="text"
      value={name}
      name="name"
      onChange={handleChange}
      placeholder="Place name..." />
    <PlacesAutocomplete onChange={handleAddressChange} value={address}>
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
      onClick={submitPlace}>
      Add new
    </button>
    <hr />
    <div className="list-group">
      {places.map(place => (
        <div className="list-group-item" key={place.id}>
          <strong style={{fontSize: '16px'}}>{place.name}</strong>
          <p>{place.address}</p>
        </div>
      ))}
    </div>
  </div>
