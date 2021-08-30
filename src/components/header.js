import React, { Component, } from 'react';

class Header extends Component {
	state = {
		keyword: '',
	}

	inputChangeHandler = (event) => {
		this.setState({
			keyword: event.target.value,
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
			</header>
		);
	}
}

export default Header;
