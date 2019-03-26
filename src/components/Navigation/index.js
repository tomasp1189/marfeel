import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation({ children, className, style }) {
	return (
		<div className={classNames('nav', className)} style={style}>
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
	className: PropTypes.string,
	style: PropTypes.object
};

export default Navigation;
