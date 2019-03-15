import React      from "react";
import logo       from '../../assets/sm.png';
import config     from "../../config";
import './style.css'

function Header() {
  return (
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
  );
}

export default Header;
