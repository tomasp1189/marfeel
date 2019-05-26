import React from 'react';
import logo from 'assets/marfeel_logo_rgb.svg';
import { Route } from 'react-router-dom';
import Header from 'components/Header';
import ArticleListContainer from 'components/Articles/ArticleListContainer';
import 'utils/icons';
import './App.css';

const App = match => {
	return (
		<div className="App">
			<Header
				logo={logo}
				size="sm"
				style={{ background: 'black', color: 'white' }}
			/>
			<main className="App__content">
				<Route path="/:category?" component={ArticleListContainer} />
			</main>
		</div>
	);
};

export default App;
