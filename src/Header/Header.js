import React from 'react';
// import Navigation from './Header/Navigation';

const header = (props) => {
	return (
		<div className="header">
			<h1> Barely Cognitive</h1>
			<Navigation switchSectionHandler={props.switchSectionHandler} />
		</div>
	)
};

const Navigation = (props) => {
	return (
		<ul>
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="home" />
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="resume" />
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="portfolio" />
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="blog" />
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="hobbies" />
	    </ul>
	)
}

const NavigationItem = (props) => {
	return (
		<li><button onClick= { () => props.switchSectionHandler(props.name) }>{props.name}</button></li>
	)
}

export default header;