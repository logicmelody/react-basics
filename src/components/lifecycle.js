import React, { Component, } from 'react';

class Life extends Component {
	constructor(props) {
		super(props);

		this.state = {
			action: '',
		};

		console.log('1 - constructor');
	}

	static getDerivedStateFromProps() {
		console.log('2 - getDerivedStateFromProps');

		return null;
	}

	render() {
		console.log('3 - render');

		return (
			<div>
				Life
			</div>
		);
	}

	componentDidMount() {
		console.log('4 - componentDidMount');
	}

	componentDidUpdate(prevProps, prevState) {

	}

	componentWillUnmount() {
		console.log('5 - componentWillUnmount');
	}
}

export default Life;
