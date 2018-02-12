import React, { Component } from 'react';
import { render } from 'react-dom';

import logo from '../../assets/Untitled.svg';

const Navbar = () => (
  <div id="navBar">
    <div id="logo-container">
      <img src={logo} />
    </div>
    <nav>
      <ul>
        <span>
          <li className="hide-nav-link"><a href="">Work</a></li>
          <li className="hide-nav-link"><a href="">Writing</a></li>
          <li className="hide-nav-link"><a href="">Contact</a></li>
        </span>
      </ul>
    </nav>
  </div>
)

export default Navbar;