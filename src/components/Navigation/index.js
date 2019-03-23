import React from 'react';
import './Navigation.css';

export default function Navigation({ children }) {
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
