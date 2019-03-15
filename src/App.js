import React, { Component } from 'react';
import CarList              from './components/CarList';
import Footer               from './components/Footer'
import logo                 from './assets/sm.png';
import config from "./config";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Score</h1>
          <p>
            {' '}
            <a
              href={config.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              DATASET
            </a>{' '}
            ANALYTICS AND VISUALIZATIONS
          </p>
        </header>
        <CarList />
        
        <Footer />
      </div>
    );
  }
}

export default App;
