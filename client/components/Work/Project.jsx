import React, { Component } from 'react';
import { render } from 'react-dom';
import speakgenius from '../../assets/sg_icon_512.png'
const Project = (props) => (
  <div className="project" id={`project-${props.number}`}>
    <div className="front">
      <img style={{width: 100}} src={speakgenius}/>
      <p>{props.description}</p>
    </div>
    <div className="overlay">
      <p>back</p>
    </div>
  </div>
)

export default Project;