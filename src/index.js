import React, { Component, } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news-list';
import Footer from './components/footer';

import JSON from './db.json';

import './styles/style.css';

class App extends Component {
	state = {
		news: JSON,
		footerText: 'I am a happy footer',
	}

	render() {
		const {
			news,
			footerText,
		} = this.state;

		return (
			<>
				<Header />
				<NewsList
					news={news}
				>
					<br />
					<h1>I am a children</h1>
				</NewsList>
				<Footer
					footerText={footerText}
				/>
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
