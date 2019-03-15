import React, { Component } from 'react';
import CarList              from './components/CarList';
import Footer               from './components/Footer'
import logo                 from './assets/sm.png';
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
              href="https://docs.google.com/spreadsheets/d/1tHmdWfer9FYzB-IOx6JK5Bdwd7tVtLzhAYOOV69ypMA/edit#gid=0"
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
