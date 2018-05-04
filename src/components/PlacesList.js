import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export default({ handleChange, handleAddressChange, name, address }) =>
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
  </div>
