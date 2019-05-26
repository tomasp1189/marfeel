import React from 'react';
import PropTypes from 'prop-types';
import './Articles.css';

function ArticleListItem({ description, img, title }) {
	return (
		<div className="article-list-item">
			<div className="article-list-item__img-container">
				{!!img && (
					<img className="article-list-item__img" src={img} alt="img" />
				)}
			</div>
			<h3 className="article-list-item__title">{title}</h3>
			<p className="article-list-item__description">{description}</p>
		</div>
	);
}

ArticleListItem.propTypes = {
	description: PropTypes.string,
	img: PropTypes.string,
	title: PropTypes.string.isRequired
};

export default ArticleListItem;
