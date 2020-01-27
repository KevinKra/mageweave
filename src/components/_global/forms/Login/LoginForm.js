import React, { useState } from 'react';

const LoginForm = () => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Registered');
	};

	const { email, password } = formData;
	return (
		<section className="LoginForm">
			<h4>Login to Account</h4>
			<form action="">
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => handleChange(e)}
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => handleChange(e)}
				/>
				<button onClick={(e) => handleSubmit(e)}>Login</button>
			</form>
		</section>
	);
};

export default LoginForm;
