import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header';

class App extends Component {

	state = {
		section: {
			name: 'home'
		},
		navigation: {
			open: 'false'
		}	
	}

	constructor(props) {
	   super(props);
	   this.openNavigationHandler = this.openNavigationHandler.bind(this);
	}	

	switchSectionHandler = name => {
		this.setState({
			section: {
				name: name 
			}	
		}, function(){console.log(this.state.section.name)});
	}

	openNavigationHandler = function(event, open){
		this.setState({
			navigation: {
				open: !this.state.navigation.open
			}
		}, function(){console.log("hamburger-nav open: " + this.state.navigation.open)});
	}

	render() {
		return (
			<div className="App">
				<Header switchSectionHandler={this.switchSectionHandler} navHandler={this.openNavigationHandler} open={this.state.navigation.open}/>
				
			</div>
		);
		// return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Hi, I\'m a React App!!')); 
	}
}

export default App;
