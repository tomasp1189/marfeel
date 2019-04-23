import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from 'components/App';
import Header from 'components/Header';
import ArticleList from 'components/Articles/ArticleList';

let wrapped;

const mountWithRouter = route => {
	return mount(
		<MemoryRouter initialEntries={[route]}>
			<App />
		</MemoryRouter>
	);
};

afterEach(() => {
	wrapped.unmount();
});

it('should show a header and an article list', () => {
	wrapped = mountWithRouter('/');
	wrapped.update();
	expect(wrapped.find(Header).length).toEqual(1);
	expect(wrapped.find(ArticleList).length).toEqual(1);
});
