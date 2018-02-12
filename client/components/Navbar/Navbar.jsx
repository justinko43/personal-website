import React, { Component } from 'react';
import { render } from 'react-dom';

import logo from '../../assets/logo.svg';

const Navbar = (props) => (
  <div id="navBar">
    <div id="logo-container">
      <a href="#" onClick={props.onLogoClick}><img src={logo} /></a>
    </div>
    <nav>
      <ul>
        <span>
          <li className="hide-nav-link"> <a href="#" onClick={props.onWorkClick}>Work </a></li>
          <li className="hide-nav-link"> <a href="#" onClick={props.onWritingClick}>Writing</a></li>
          <li className="hide-nav-link"> <a href="#" onClick={props.onContactClick}>Contact</a></li>
        </span>
      </ul>
    </nav>
  </div>
)

export default Navbar;