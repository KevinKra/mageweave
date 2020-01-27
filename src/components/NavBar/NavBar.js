import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	return (
		<nav className="NavBar">
			<div className="content">
				<Link to="/dashboard">
					<h2>Mageweave</h2>
				</Link>
				<section>
					<Link to="/courses">Courses</Link>
					<Link to="/challenges">Challenges</Link>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
					<Link to="/profile">Profile</Link>
				</section>
			</div>
		</nav>
	);
};

export default NavBar;
