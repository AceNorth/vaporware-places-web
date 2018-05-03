import React from 'react';

export default({ handleChange, name }) =>
  <div className="col-md-3">
    <h2>Places List</h2>
    <input
      className="form-control"
      type="text"
      value={name}
      name="name"
      onChange={handleChange}
      placeholder="Place name..." />
  </div>
