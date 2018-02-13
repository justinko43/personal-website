import React, { Component } from 'react';
import { render } from 'react-dom';

//import project card
import Project from './Project.jsx';

const projects = [
  {
    title: 'PeerConnect',
    description: '',
    stack: '',
    github: '',
    demo: '',
  },
  {
    title: 'PastChat',
    description: '',
    stack: '',
    github: '',
    demo: '',
  },
  {
    title: 'SpeakGenius',
    description: '',
    stack: '',
    github: '',
    demo: '',
  }
]

const Work = () => (
  projects.map((project, i) => 
    <Project 
      key={`instruction-${i}`}
      title={project.title}
      description={project.description}
      stack={project.stack}
      github={project.github}
      demo={project.demo}
    />
  )
)

export default Work;