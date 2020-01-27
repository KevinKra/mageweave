import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import './ChallengesOverview.scss';

const ChallengesOverview = () => {
	return (
		<section className="coding-challenges">
			<div className="lock-icon">
				<FontAwesomeIcon
					className="icon"
					icon={faWrench}
					size="lg"
					transform="down"
				/>
			</div>
			<h3 className="section-title">Challenges</h3>
			<aside className="challenges">
				<section className="current-details">
					<header>
						<h3>Recursion Riddle</h3>
					</header>
					<body>
						<p>
							Your goal in this kata is to implement a difference
							function, which subtracts one list from another and
							returns the result.
						</p>
						<section className="tag-container">
							<article className="tag">Fundamentals</article>
							<article className="tag">Arrays</article>
							<article className="tag">Recursion</article>
						</section>
					</body>
				</section>
				<section className="challenge-btns">
					<button>Train</button>
					<button>Skip</button>
				</section>
			</aside>
		</section>
	);
};

export default ChallengesOverview;
