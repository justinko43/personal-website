import React, { Component } from 'react';
import { render } from 'react-dom';
import speakgenius from '../../assets/sg_icon_512.png'
const Project = (props) => (
  <div className="project" id={`project-${props.number}`}>
    <img style={{width: 100}} src={speakgenius}/>
    {/* {props.directory} */}
  </div>
)

export default Project;