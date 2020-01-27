import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import './CourseCard.scss';

const CourseCard = (props) => {
	const handleRedirect = () => {
		props.history.push(`courses/${props.name.toLowerCase()}`);
	};
	return (
		<article className="CourseCard" onClick={handleRedirect}>
			<div className="card-interior">
				<div className="card-details">
					<h4>{props.name}</h4>
					<p>
						by <span>{props.author}</span>
					</p>
				</div>
				<div className="card-stats">
					<div>
						<FontAwesomeIcon
							className="icon"
							icon={faUser}
							size="md"
							transform="down"
						/>
						<p>{props.totalUsers}</p>
					</div>
					<div>
						<FontAwesomeIcon
							className="icon"
							icon={faClock}
							size="md"
							transform="down"
						/>
						<p>{props.estimatedDuration}</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default withRouter(CourseCard);
