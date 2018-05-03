import React, { Component } from 'react';
import Places from './containers/Places';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center">Places!</h1>
        <Places />
      </div>
    );
  };
};

export default App;
