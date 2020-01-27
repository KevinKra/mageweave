import React from 'react';
import RegistrationForm from '../../components/general/forms/Registration/RegistrationForm';
import LoginForm from '../../components/general/forms/Login/LoginForm';
import './AuthPage.scss';

const AuthPage = ({ format }) => {
	if (format === 'login') {
		return (
			<section className="AuthPage">
				<h4>Auth Page</h4>
				<section className="auth-forms">
					<aside>
						<LoginForm />
					</aside>
				</section>
			</section>
		);
	} else if (format === 'register') {
		return (
			<section className="AuthPage">
				<h4>Auth Page</h4>
				<section className="auth-forms">
					<aside>
						<RegistrationForm />
					</aside>
				</section>
			</section>
		);
	} else {
		throw Error(
			"AuthForm component can only have the format prop value of 'login' or 'register'."
		);
	}
};

export default AuthPage;
