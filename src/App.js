import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import RecentAds from './components/RecentAds';
import PremiumGalery from './components/PremiumGalery';
import SelectState from './components/SelectState';
import Discover from './components/Discover';
import About from './components/About';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SearchBar />
        <RecentAds />
        <PremiumGalery />
        <SelectState />
        <Discover />
        <About />
        <Footer />
      </>
    );
  }
}

export default App;
