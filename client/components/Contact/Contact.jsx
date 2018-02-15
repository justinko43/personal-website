import React, { Component } from 'react';
import { render } from 'react-dom';

import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import mail from '../../assets/mail.svg';
import medium from '../../assets/medium.svg';
import twitter from '../../assets/twitter.svg';


const Contact = () => (
  <div id="contact" className="center-content">
    <div id="inner-contact">
    <h1 align="left" className="margin-top-0 allerta margin-bottom-lg">Get in touch!</h1>
      <div className="margin-bottom-lg">
        Got a project you would like me to work on? Or how about just a friendly chat? 
        Give me an email and we can grab some good coffee.
      </div>
      <div>
        <a href="mailto:justin.ko43@gmail.com" className="margin-right" ><img style={{ width: '50px'}} src={mail} /></a>
        You can email me at&nbsp;
        <span><a href="mailto:justin.ko43@gmail.com">justin.ko43@gmail.com</a></span>
      </div>
      <h3>Networks</h3>
      <div className="margin-bottom-lg">
        or you can give me a follow/message on these websites:
      </div>
      <div className="center-content">
        <a className="margin-right-xl" href="https://github.com/justinko43" ><img style={{ width: '50px'}} src={github} /></a>
        <a className="margin-right-xl" href="https://www.linkedin.com/in/justinmko/" ><img style={{ width: '50px'}} src={linkedin} /></a>
        <a className="margin-right-xl" href="https://twitter.com/justdoggneo43" ><img style={{ width: '50px'}} src={twitter} /></a>        
      </div>
    </div>
  </div>
)

export default Contact;