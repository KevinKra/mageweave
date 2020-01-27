import React, { Component } from 'react';

export default class RegistrationForm extends Component {
	state = {
		name: '',
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
			<section className="RegistrationForm">
				<h4>Register an Account</h4>
				<form action="">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						onChange={(e) => this.handleChange(e)}
					/>
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
					<button onClick={(e) => this.handleSubmit(e)}>
						Register
					</button>
				</form>
			</section>
		);
	}
}
