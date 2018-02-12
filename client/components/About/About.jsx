import React, { Component } from 'react';
import { render } from 'react-dom';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

const About = () => (
  <div>
    <h2>Justin Ko</h2>
    {/* <TypistLoop>
      {[
        'Entrepreneur',
        'Full-Stack Engineer',
        '(Future) Shiba Owner',
      ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
    </TypistLoop> */}
  </div>
)

export default About;