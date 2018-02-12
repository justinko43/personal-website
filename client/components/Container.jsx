import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';

const currentYear = moment().format('YYYY');

//components
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Work from './Work/Work.jsx';

class Container extends Component {
  render() {
    return (
      <div id="container">
        <Navbar />
        <About />
        <div>
          &copy; Copyright {currentYear} Justin Ko
        </div>
      </div>
    )
  }
}

export default Container;