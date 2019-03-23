import React from 'react';
import ArticleListItem from 'components/Articles/ArticleListItem';
import './Articles.css';

export default function ArticleList({ articles }) {
	return (
		<div className="article-list">
			{articles.map(({ description, img, title }, index) => (
				<ArticleListItem
					key={`${title}-${index}`}
					description={description}
					img={img}
					title={title}
				/>
			))}
		</div>
	);
}
