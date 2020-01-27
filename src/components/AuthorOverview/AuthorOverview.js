import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

const AuthorOverview = () => {
	return (
		<section className="author-options">
			<div className="lock-icon">
				<FontAwesomeIcon
					className="icon"
					icon={faWrench}
					size="lg"
					transform="down"
				/>
			</div>
			<h3>Course Management</h3>
			<div className="btn-container">
				<button>Create a Course</button>
				<button>Write an Article</button>
			</div>
		</section>
	);
};

export default AuthorOverview;
