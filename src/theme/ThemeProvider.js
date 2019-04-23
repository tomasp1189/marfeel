import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children, theme }) => {
	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
};

export default ThemeProvider;
