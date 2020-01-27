import React, { useState } from 'react';

const RegistrationForm = () => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Registered');
	};

	const { name, email, password, passwordConfirmation } = formData;

	return (
		<section className="RegistrationForm">
			<h4>Register an Account</h4>
			<form action="">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => handleChange(e)}
				/>
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
				<label htmlFor="passwordConfirmation">
					Password Confirmation:
				</label>
				<input
					type="password"
					name="passwordConfirmation"
					value={passwordConfirmation}
					onChange={(e) => handleChange(e)}
				/>
				<button onClick={(e) => handleSubmit(e)}>Register</button>
			</form>
		</section>
	);
};

export default RegistrationForm;
