import React, { Component } from 'react';
import { render } from 'react-dom';

import logo from '../../assets/logo.svg';

const Navbar = (props) => (
  <div id="navbar" className="bg-white padding-left-xl padding-right-xl box-shadow-light">
    <div id="logo-container">
      <a href="#" onClick={props.onLogoClick}><img style={{ width: '75px'}} src={logo} /></a>
    </div>
    <nav id="navigation" className="margin-right-xl">
      <ul className="fw-600">
        <span>
          <li className="hide-nav-link animate"> <a href="#" onClick={props.onWorkClick}>Work </a></li>
          <li className="hide-nav-link animate"> <a href="#" onClick={props.onWritingClick}>Writing</a></li>
          <li className="hide-nav-link animate"> <a href="#" onClick={props.onContactClick}>Contact</a></li>
        </span>
      </ul>
    </nav>
  </div>
)

export default Navbar;