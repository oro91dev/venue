import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header.js';
import Featured from './components/featured';
import Venue from './components/venueNfo';
import VenueNfo from './components/venueNfo';
import Higlights from './components/highlights/index';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background:'cornflowerblue'}}>
        <Header/>
        <Featured/>
        <VenueNfo/>
        <Higlights/>
      </div>
    );
  }
}

export default App;
