import React from 'react';
import logo from 'assets/marfeel_logo_rgb.svg';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from 'components/Header';

it('should render without logo', () => {
	const wrapped = mount(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	);

	expect(wrapped.find('img.header__logo').length).toEqual(0);
});

it('should render with logo and logo size default to sm', () => {
	const wrapped = mount(
		<MemoryRouter>
			<Header logo={logo} />
		</MemoryRouter>
	);

	expect(wrapped.find('img.header__logo').length).toEqual(1);
	expect('size' in wrapped.find(Header).props()).toEqual(true);
});
