import React, { Component } from 'react';
import Header               from './components/Header'
import CarList              from './components/CarList';
import Footer               from './components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CarList />        
        <Footer />
      </div>
    );
  }
}

export default App;
