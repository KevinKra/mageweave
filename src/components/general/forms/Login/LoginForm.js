import React, { Component } from 'react';

export default class LoginForm extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Registered');
	};

	render() {
		return (
			<section className="LoginForm">
				<h4>Login to Account</h4>
				<form action="">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						onChange={(e) => this.handleChange(e)}
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						onChange={(e) => this.handleChange(e)}
					/>
					<button onClick={(e) => this.handleSubmit(e)}>Login</button>
				</form>
			</section>
		);
	}
}
