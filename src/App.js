import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';

class App extends Component {

	state = {
		section: {
			name: 'home'
		}	
	}

	switchSectionHandler = (name) => {
		this.setState({
			section: {
				name: name 
			}	
		});
		console.log(this.state.section.name);
	}

	render() {
		return (
			<div className="App">
				<Header switchSectionHandler={this.switchSectionHandler}/>
				
			</div>
		);
		// return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Hi, I\'m a React App!!')); 
	}
}

export default App;
