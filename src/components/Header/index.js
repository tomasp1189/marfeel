import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Navigation from 'components/Navigation';
import IconButton from 'components/IconButton';
import useElementOffsetHeight from 'hooks/useElementOffsetHeight';
import './Header.css';

function Header({ logo, size, style }) {
	let position = useElementOffsetHeight('.article-list');

	const [navIsHidden, setNavIsHidden] = useState(false);

	useEffect(() => {
		if (!navIsHidden && position >= 400) setNavIsHidden(true);
		if (navIsHidden && position < 400) setNavIsHidden(false);
	}, [position]);

	const handleMenuButtonClick = () => {
		setNavIsHidden(!navIsHidden);
	};

	const iconSize = size === 'md' ? '3x' : size === 'l' ? '4x' : '2x';

	return (
		<header className={`header ${size}`} style={style}>
			<IconButton icon="bars" onClick={handleMenuButtonClick} size={iconSize} />
			{!!logo && (
				<img src={logo} alt="logo" className={`header__logo ${size}`} />
			)}
			<Navigation className={navIsHidden ? 'hidden' : ''}>
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
	logo: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'md', 'l']),
	style: PropTypes.object
};
Header.defaultProps = {
	size: 'sm'
};
export default Header;
