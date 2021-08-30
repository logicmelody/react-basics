import React from 'react';

import NewsItem from './news-list-item';

const NewsList = (props) => {
	const news = props.news.map((item) => {
		return (
			<NewsItem
				key={item.id}
				item={item}
			/>
		);
	});

	return (
		<>
			{news}
			{props.children}
		</>
	)
};

export default NewsList;
