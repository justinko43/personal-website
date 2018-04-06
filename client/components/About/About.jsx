import React, { Component } from 'react';
import { render } from 'react-dom';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';


const About = () => (
  <div id="about" className="center-content">
    <h1 className="allerta margin-top-0">Hi my name <br/> is Justin and I am
    <TypistLoop>
        {[
          'an Entrepreneur',
          'a Full-Stack Engineer',
          'a Blockchain Enthusiast',
          'a (Future) Shiba Owner',
        ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
      </TypistLoop>
    </h1>
  </div>
)

export default About;