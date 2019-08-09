import React from 'react';
import './Header.scss';
import logo from './Barely_logo.png';

const header = props => {
	return (
		<div className="Header">
			<img className="title" src={logo} alt="Barely Cognitive"></img>
			<div className="nav-bar">
				<Navigation switchSectionHandler={props.switchSectionHandler}/>
			</div>
			<div onClick= {props.navHandler} className={"hamburger " + (props.open ? 'close' : 'open')}>
				<span className="cls"/>
				<span></span>
				<span className="cls"/>
				<span className="accent"/>
			</div>
			<div className="nav-burger">
				<Navigation switchSectionHandler={props.switchSectionHandler} open={props.open}/>
			</div>
		</div>
	)
};

const Navigation = props => {
	return (
		<ul className={"nav-menu " + (props.open ? 'close' : 'open')}>
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="Home" />
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="About Me" />
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="Portfolio" />
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="Blog" />
	    	<NavigationItem switchSectionHandler={props.switchSectionHandler} name="Hobbies" />
	    </ul>
	)
}

const NavigationItem = props => {
	return (
		//two different ways to call a function between components
		<li onClick= { () => props.switchSectionHandler(props.name) }>{props.name}</li>
		
		//below code only works if you bind a reference to the switchSectionHandler to a property of Navigation
		// <li><button onClick= {props.switchSectionHandler}> {props.name}</button></li>
		
	)
}

export default header;