import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import RecentAds from './components/RecentAds';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SearchBar />
        <RecentAds />
      </>
    );
  }
}

export default App;
