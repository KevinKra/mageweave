import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './AuthPage.scss';
import RegistrationForm from '../../components/general/forms/Registration/RegistrationForm';
import LoginForm from '../../components/general/forms/Login/LoginForm';

export default function AuthPage() {
	return (
		<section className="AuthPage">
			<NavBar />
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
}
