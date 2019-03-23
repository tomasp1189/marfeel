import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation({ children }) {
	return (
		<div className="nav">
			<ul>
				{children.map((child, index) => (
					<li key={index}>{child}</li>
				))}
			</ul>
		</div>
	);
}
Navigation.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node)
};

export default Navigation;
