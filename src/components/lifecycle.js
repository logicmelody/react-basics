import React, { Component, } from 'react';

class Life extends Component {
	constructor(props) {
		super(props);

		this.state = {
			action: '',
			name: 'Francis',
		};

		console.log('1 - constructor');
		console.log('=============================');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('2 - getDerivedStateFromProps');
		console.log('props', props);
		console.log('state', state);
		console.log('=============================');

		if (state.name === 'Ron') {
			return {
				name: 'Milhouse',
			};
		}

		return null;
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('x - shouldComponentUpdate');
		console.log('this.state', this.state);
		console.log('nextState', nextState);
		console.log('=============================');

		if (nextState.name === 'Steve') {
			return false;
		}

		return true;
	}

	render() {
		console.log('3 - render');
		console.log('=============================');

		return (
			<div>
				<div>
					{this.state.name}
				</div>
				<div onClick={() => {
					this.setState({
						name: "Ron",
					})
				}}>
					Change name
				</div>
			</div>
		);
	}

	componentDidMount() {
		console.log('4 - componentDidMount');
		console.log('=============================');
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('x - getSnapshotBeforeUpdate');
		console.log('=============================');

		const age = 20;

		return age;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('x - componentDidUpdate');
		console.log('prevState', prevState);
		console.log('this.state', this.state);
		console.log('snapshot', snapshot);
		console.log('=============================');
	}

	componentWillUnmount() {
		console.log('5 - componentWillUnmount');
		console.log('=============================');
	}
}

export default Life;
