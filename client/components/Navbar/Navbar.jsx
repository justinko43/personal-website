import React, { Component } from 'react';
import { render } from 'react-dom';

import logo from '../../assets/logo2.svg';

const Navbar = (props) => (
  <div id="navbar" className="bg-white margin-top-lg padding-left-xl padding-right-xl">
    <div id="logo-container" className="center-content">
      <a href="#" onClick={props.onLogoClick}><img style={{ width: '200px'}} src={logo} /></a>
    </div>
    <nav id="navigation" className="margin-top-m center-content">
      <ul className="fw-600 center-content">
        <span className="center-content">
          <li className="hide-nav-link animate "> <a href="#" onClick={props.onWorkClick}>Work </a></li>
          <li className="hide-nav-link animate "> <a href="#" onClick={props.onWritingClick}>Writing</a></li>
          <li className="hide-nav-link animate "> <a href="#" onClick={props.onContactClick}>Contact</a></li>
        </span>
      </ul>
    </nav>
  </div>
)

export default Navbar;