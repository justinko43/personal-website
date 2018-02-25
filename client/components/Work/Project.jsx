import React, { Component } from 'react';
import { render } from 'react-dom';

const Project = (props) => (
  <div className="project" id={`project-${props.number}`}>
    {props.title}
  </div>
)

export default Project;