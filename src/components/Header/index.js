import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Navigation from 'components/Navigation';
import './Header.css';

function Header({ logo, size }) {
	return (
		<header className="header">
			<div />
			{!!logo && (
				<img src={logo} alt="logo" className={`header__logo ${size}`} />
			)}
			<Navigation>
				<NavLink exact to="/">
					Home
				</NavLink>
				<NavLink to="/politics">Politics</NavLink>
				<NavLink to="/opinions">Opinions</NavLink>
				<NavLink to="/sports">Sports</NavLink>
				<NavLink to="/nation">Nation</NavLink>
			</Navigation>
		</header>
	);
}
Header.propTypes = {
	imgSrc: PropTypes.object,
	size: PropTypes.oneOf(['sm', 'md', 'l'])
};
Header.defaultProps = {
	size: 'sm'
};
export default Header;
