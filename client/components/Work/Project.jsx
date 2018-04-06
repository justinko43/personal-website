import React, { Component } from 'react';
import { render } from 'react-dom';
import speakgenius from '../../assets/sg_icon_512.png'


const Project = (props) => (
  <div className="project" id={`project-${props.number}`}>
    <div className="front">
      <img src={speakgenius}/>
      <div className="work-description">
        <h4 className="fw-600">{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
    <div className="overlay">
      <p>back</p>
    </div>
  </div>
)

export default Project;