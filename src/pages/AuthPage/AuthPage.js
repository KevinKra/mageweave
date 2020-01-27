import React from 'react';
import RegistrationForm from '../../components/general/forms/Registration/RegistrationForm';
import LoginForm from '../../components/general/forms/Login/LoginForm';
import './AuthPage.scss';

const AuthPage = () => {
	return (
		<section className="AuthPage">
			<h4>Auth Page</h4>
			<section className="auth-forms">
				<aside>
					<RegistrationForm />
				</aside>
				<aside>
					<LoginForm />
				</aside>
			</section>
		</section>
	);
};

export default AuthPage;
