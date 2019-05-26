import axios from 'axios';
import urls from 'constants/urls';

export const getArticles = async query => {
	try {
		let url = `${urls.ARTICLE_WEBTASK_URL}?`;
		const { category = 'business', dateFrom, sortBy } = query;
		if (category) url = `${url}category=${category}`;
		if (dateFrom) url = `${url}from=${dateFrom}`;
		if (sortBy) url = `${url}sortBy=${sortBy}`;

		const { data } = await axios.get(url);

		return data;
	} catch (e) {
		return { error: e.message, articles: [] };
	}
};
