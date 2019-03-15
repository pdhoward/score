import React from "react";
import logo  from '../../assets/sm.png';
import './style.css'

function Footer() {
  return (
    <footer>
      <hr />
      <p>
        Forged on{' '}
          <span role="img">
          <a href="https://github.com/pdhoward/score"><i className="fab fa-github" /></a>            
          </span>
      </p> 
      <p>
        &copy; 2018{' '}
        <a href="https://twitter.com/urban_coder">Strategic Machines, Inc</a>{' '}
        <img src={logo} className="App-logo-small" alt="SM Logo" />
      </p>
    </footer>
  );
}

export default Footer;
