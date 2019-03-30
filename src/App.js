import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar />
      </div>
    );
  }
}

export default App;
