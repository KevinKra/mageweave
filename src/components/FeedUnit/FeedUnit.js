import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import './FeedUnit.scss';

const FeedUnit = (props) => {
	return (
		<article className="FeedUnit">
			<section className="award-section">
				<div className="award-background">
					<FontAwesomeIcon
						className="award-icon"
						icon={faAward}
						size="sm"
						transform="down-2"
					/>
				</div>
			</section>
			<section className="award-details">
				<h4 className="award-message">{props.message}</h4>
				<p>Points: {props.points}</p>
				<p>Date: {props.date}</p>
			</section>
		</article>
	);
};

export default FeedUnit;
