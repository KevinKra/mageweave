import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	});
	const { name, email, password, passwordConfirmation } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== passwordConfirmation) {
			console.log("Passwords don't match");
		} else {
			const newUser = {
				name,
				email,
				password
			};

			try {
				const config = {
					headers: { 'Content-Type': 'application/json' }
				};
				const body = JSON.stringify(newUser);
				const res = await axios.post('/api/users', body, config);
				console.log(res.data);
			} catch (error) {
				console.log(error.response.data);
			}
		}
	};

	return (
		<section className="RegistrationForm">
			<h4>Register an Account</h4>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => handleChange(e)}
					required
				/>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => handleChange(e)}
					required
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => handleChange(e)}
					required
				/>
				<label htmlFor="passwordConfirmation">
					Password Confirmation:
				</label>
				<input
					type="password"
					name="passwordConfirmation"
					value={passwordConfirmation}
					onChange={(e) => handleChange(e)}
					required
				/>
				<button>Register</button>
			</form>
			<Link to="/login">
				Already have an account? Click here to login.
			</Link>
		</section>
	);
};

export default RegistrationForm;
