import React, { Component } from 'react';
import { render } from 'react-dom';

const Contact = () => (
  <div id="contact" className="center-content">
    <div id="inner-contact">
    <h1 className=" allerta margin-bottom-xl">Get in touch!</h1>
    <div className=" center-content margin-left-s margin-bottom-lg">
      You can email me at&nbsp;
      <span><a href="mailto:justin.ko43@gmail.com">justin.ko43@gmail.com</a></span>
    </div>
    <div className="center-content margin-left-s margin-bottom-lg">
      You can find me on LinkedIn&nbsp;
      <span><a href="https://www.linkedin.com/in/justinmko/">here</a></span>
    </div>
    <div className="center-content margin-left-s margin-bottom-lg">
      You can see my Github repo&nbsp;
      <span><a href="https://github.com/justinko43/">@justinko43</a></span>
    </div>
    <div className="center-content margin-left-s margin-bottom-lg">
      You can tweet me&nbsp;
      <span><a href="https://twitter.com/justdoggneo43">@justdoggneo43</a></span>
    </div>
    
    </div>
  </div>
)

export default Contact;