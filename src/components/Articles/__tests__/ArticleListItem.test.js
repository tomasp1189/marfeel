import React from 'react';
import svgImage from 'assets/marfeel_logo_rgb.svg';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ArticleListItem from 'components/Articles/ArticleListItem';

it('should render with image, title and description', () => {
	console.log(typeof svgImage);
	const wrapped = mount(
		<MemoryRouter>
			<ArticleListItem
				description="example description"
				img={svgImage}
				title="example title"
			/>
		</MemoryRouter>
	);

	expect(wrapped.find('img.article-list-item__img').length).toEqual(1);

	let articleText = wrapped.render().text();

	expect(articleText).toContain('example title');
	expect(articleText).toContain('example description');
});

it('should render without image', () => {
	const wrapped = mount(
		<MemoryRouter>
			<ArticleListItem
				description="example description"
				title="example title"
			/>
		</MemoryRouter>
	);

	expect(wrapped.find('img.article-list-item__img').length).toEqual(0);
});
