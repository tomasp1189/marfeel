import { useEffect, useState } from 'react';
import { getArticles } from 'api/articlesApiClient';

export default function useArticlesApi() {
	const [articles, setArticles] = useState([]);
	const [query, setQuery] = useState({});
	const [error, setError] = useState();

	useEffect(() => {
		const articlesRequest = async () => {
			const { articles, error } = await getArticles(query);
			setArticles(articles);
			setError(error);
		};
		articlesRequest();
	}, [query]);

	return [articles, error, setQuery];
}
