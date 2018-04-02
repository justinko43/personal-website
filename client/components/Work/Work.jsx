import React, { Component } from 'react';
import { render } from 'react-dom';

//import project card
import Project from './Project.jsx';

const projects = [
	{
		title: 'SpeakGenius',
		description: 'Language acquisition startup for students in Asia',
		stack: 'Angular, Node, Express, Firebase',
		github: '',
		demo: 'https://speak-genius.firebaseapp.com/',
		directory: '../../assets/sg_icon_512.png',
	},
	{
		title: 'PeerConnect',
		description: 'P2P CDN implementation with WebRTC, Websockets, and WebTorrent',
		stack: 'WebRTC, Websockets, WebTorrent, ',
		github: 'https://github.com/PeerConnect/peer-connect',
		demo: 'http://peer-connect.io/',
		directory: '../../assets/sg_icon_512.png',
	},
	{
		title: 'PastChat',
		description: '',
		stack: '',
		github: '',
		demo: '',
		directory: '../../assets/sg_icon_512.png',
	},
	{
		title: "Pete's Memory Palace",
		description: '',
		stack: '',
		github: '',
		demo: '',
		directory: '../../assets/sg_icon_512.png',
	},
	{
		title: 'Git Visual',
		description: '',
		stack: '',
		github: '',
		demo: '',
		directory: '../../assets/sg_icon_512.png',
	},
];

const Work = () => (
	<div id="work" className="padding-lg center-content">
		<div>
			<h1 className="allerta">A lovely selection of work</h1>
		</div>
		<div id="project-wrapper" className="margin-top-lg">
			{projects.map((project, i) => (
				<Project
					key={`instruction-${i}`}
					number={i}
					title={project.title}
					description={project.description}
					stack={project.stack}
					github={project.github}
					demo={project.demo}
				/>
			))}
		</div>
	</div>
);

export default Work;
