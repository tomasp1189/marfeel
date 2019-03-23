import React, { Component } from 'react';
import logo from 'assets/marfeel_logo_rgb.svg';
import mockArticles from 'assets/mockArticles';
import { Route } from 'react-router-dom';
import Header from 'components/Header';
import ArticleList from 'components/Articles/ArticleList';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header logo={logo} size="sm" />
				<main className="App__content">
					<Route path="/">
						<ArticleList articles={mockArticles(4)} />
					</Route>
				</main>
			</div>
		);
	}
}

export default App;
