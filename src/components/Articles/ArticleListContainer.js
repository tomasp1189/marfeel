import React, { useEffect } from 'react';
import useGetArticles from 'hooks/useGetArticles';

import ArticleList from './ArticleList';

const ArticleListContainer = ({ match }) => {
	const [articles, error, setQuery] = useGetArticles();

	const {
		params: { category }
	} = match;

	useEffect(() => {
		setQuery({ category });
	}, [category]);

	return <ArticleList articles={articles} />;
};

export default ArticleListContainer;
