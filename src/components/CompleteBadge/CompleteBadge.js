import React from 'react';
import './CompleteBadge.scss';

const CompleteBadge = (props) => {
	return (
		<section className="CompleteBadge">
			<h5>Completed</h5>
			<h3>{props.title}</h3>
			<p>Test Score: {props.score}/100</p>
			<p>Difficulty: {props.difficulty}/5</p>
		</section>
	);
};

export default CompleteBadge;
