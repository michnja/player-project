import React from 'react';
import '../App.css';
import './navbar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <input type='checkbox' id='check'></input>
        <label for='check'>
          {' '}
          <FontAwesomeIcon icon={faBars} className='checkbtn' />
        </label>

        <label className='logo'> </label>
        <ul>
          <li>
            <a className='active' href='#'>
              Home
            </a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Player</a>
          </li>
          <li>
            <a href='#'>Info</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
