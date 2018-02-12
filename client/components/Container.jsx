import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';

//get current year for copyright
const currentYear = moment().format('YYYY');

//components
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Work from './Work/Work.jsx';
import Writing from './Writing/Writing.jsx'

class Container extends Component {
  constructor() {
    super();
    this.state = { display: 'about' };

    //bind this to event handlers
    this.onLogoClick = this.onLogoClick.bind(this);
    this.onContactClick = this.onContactClick.bind(this);
    this.onWorkClick = this.onWorkClick.bind(this);
    this.onWritingClick = this.onWritingClick.bind(this);
  }

  displayBody() {
    if (this.state.display === 'about') {
      return <About />;
    } else if (this.state.display === 'contact') {
      return <Contact />;
    } else if (this.state.display === 'work') {
      return <Work />;
    } else if (this.state.display === 'writing') {
      return <Writing />;
    }
  }

  //event handlers
  onLogoClick() {
    this.setState({ display: 'about' });
  }
  onContactClick() {
    this.setState({ display: 'contact' });
  }
  onWorkClick() {
    this.setState({ display: 'work' });
  }
  onWritingClick() {
    this.setState({ display: 'writing' });
  }
  

  render() {
    return (
      <div id="container">
        <Navbar 
          onLogoClick={this.onLogoClick} 
          onContactClick={this.onContactClick}
          onWorkClick={this.onWorkClick}
          onWritingClick={this.onWritingClick}
        />
        {this.displayBody()}
        <div id="footer">
          &copy; Copyright {currentYear} Justin Ko. View the code for this website on <a href="https://github.com/justinko43/personal-website"> Github </a>
        </div>
      </div>
    )
  }
}

export default Container;