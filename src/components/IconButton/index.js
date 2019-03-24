import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconButton({ icon, onClick }) {
	return (
		<button onClick={onClick}>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
}

IconButton.protoTypes = {
	icon: PropTypes.string,
	onClick: PropTypes.func
};

export default IconButton;
