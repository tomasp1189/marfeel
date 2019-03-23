import React from 'react';
import { mount } from 'enzyme';
import king from 'assets/king.svg';
import { MemoryRouter } from 'react-router-dom';
import mockArticles from 'assets/mockArticles';
import ArticleList from 'components/Articles/ArticleList';
import ArticleListItem from 'components/Articles/ArticleListItem';

let wrapped;

beforeEach(() => {
	const articles = [
		{
			img: king,
			title: 'article 1',
			description: 'article description text 1'
		},
		{
			img: king,
			title: 'article 2',
			description: 'article description text 2'
		}
	];
	wrapped = mount(<ArticleList articles={articles} />);
});

it('should render one <ArticleListItem> for each comment', () => {
	let comments = wrapped.find(ArticleListItem).length;

	expect(comments).toEqual(2);
});

it('should show the text for each article', () => {
	let commentText = wrapped.render().text();
	expect(commentText).toContain('article 1');
	expect(commentText).toContain('article description text 1');
	expect(commentText).toContain('article 2');
	expect(commentText).toContain('article description text 2');
});
