import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation({ children, className }) {
	return (
		<div className={classNames('nav', className)}>
			<ul>
				{children.map((child, index) => (
					<li key={index}>{child}</li>
				))}
			</ul>
		</div>
	);
}
Navigation.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node),
	className: PropTypes.string
};

export default Navigation;
