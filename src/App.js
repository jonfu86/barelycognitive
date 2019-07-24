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

	switchSectionHandler = (name) => {
		this.setState({
			section: {
				name: name 
			}	
		}, function(){console.log(this.state.section.name)});
	}

	openNavigationHandler = open => {
		this.setState({
			navigation:{
				open: !this.state.navigation.open
			}
		}, function(){console.log(this.state.navigation.open)});
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
