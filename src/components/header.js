import React, { Component, } from 'react';

class Header extends Component {
	state = {
		name: 'Francis',
		title: 'The keywords are:',
		keyword: '',
		count: 0,
	}

	inputChangeHandler = (event) => {
		this.setState({
			keyword: event.target.value,
		});
	}

	addOne = () => {
		this.setState((state, props) => {
			return {
				count: state.count + 1,
			}
		});
	}

	render() {
		return (
			<header>
				<div className='logo'>
					Logo
				</div>

				<input
					onChange={this.inputChangeHandler}
				/>

				<div>
					{this.state.title}
				</div>

				<div>
					{this.state.keyword}
				</div>

				<br />

				<div>
					{this.state.count}
				</div>

				<button onClick={() => {
					this.addOne();
				}}>
					Add one
				</button>
			</header>
		);
	}
}

export default Header;
