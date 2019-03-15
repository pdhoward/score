import React from "react";
import logo  from '../../assets/sm.png';
import './style.css'

function Footer() {
  return (
    <footer>
      <hr />
      <p>
        Made with{' '}
        <span role="img" aria-labelledby="Love">
            ❤️
        </span>{' '}
        &amp; <img src={logo} className="App-logo-small" alt="React Logo" /> by{' '}
        <a href="https://twitter.com/416serg">Strategic Machines, Inc</a>
      </p>
    </footer>
  );
}

export default Footer;
/*

<footer className="App-footer">
          <p>
            Made with{' '}
            <span role="img" aria-labelledby="Love">
              ❤️
            </span>{' '}
            &amp; <img src={react} className="App-logo-small" alt="React Logo" /> by{' '}
            <a href="https://twitter.com/416serg">416serg</a>
          </p>
        </footer>

//
<footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Strategic Machines, Inc
      </p>
    </footer>
*/