import React from 'react';
import logo from 'assets/marfeel_logo_rgb.svg';
import { Route } from 'react-router-dom';
import Header from 'components/Header';
import ArticleList from 'components/Articles/ArticleList';
import mockArticles from 'utils/mockArticles';
import 'utils/icons';
import './App.css';

function App() {
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

export default App;
