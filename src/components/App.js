import React, { Component } from 'react';
import logo from 'assets/marfeel_logo_rgb.svg';
import { Route } from 'react-router-dom';
import Header from 'components/Header';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header logo={logo} size="sm" />
				<main>
					<Route path="/" />
				</main>
			</div>
		);
	}
}

export default App;
