import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconButton.css';

function IconButton({ icon, onClick, size }) {
	return (
		<button className="icon-button" onClick={onClick}>
			<FontAwesomeIcon icon={icon} size={size} />
		</button>
	);
}

IconButton.protoTypes = {
	icon: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.string
};

export default IconButton;
