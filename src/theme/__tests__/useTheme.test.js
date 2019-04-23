import React from 'react';
import { mount } from 'enzyme';
import useTheme from '../useTheme';
import ThemeProvider from '../ThemeProvider';

let wrapped;

afterEach(() => {
	wrapped.unmount();
});

it('should use the theme', () => {
	const Test = () => {
		const theme = useTheme();
		return <span>{theme.foo}</span>;
	};

	wrapped = mount(
		<ThemeProvider theme={{ foo: 'foo' }}>
			<Test />
		</ThemeProvider>
	);

	expect(wrapped.text()).toEqual('foo');
});
