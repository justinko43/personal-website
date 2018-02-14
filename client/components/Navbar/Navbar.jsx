import React, { Component } from 'react';
import { render } from 'react-dom';

import logo from '../../assets/logo2.svg';

const Navbar = (props) => (
  <div id="navbar" className="bg-white margin-top padding-left-xl padding-right-xl">
    <div id="logo-container" className="center-content">
      <a href="#" onClick={props.onLogoClick}><img style={{ width: '200px'}} src={logo} /></a>
    </div>
    <ul id="navigation" className="margin-top center-content">
      <span>
        <li className="hide-nav-link animate"> <a href="#" onClick={props.onWorkClick}>Work </a></li>
        <li className="hide-nav-link animate"> <a href="#" onClick={props.onWritingClick}>Writing</a></li>
        <li className="hide-nav-link animate"> <a href="#" onClick={props.onContactClick}>Contact</a></li>
      </span>
    </ul>
  </div>
)

export default Navbar;