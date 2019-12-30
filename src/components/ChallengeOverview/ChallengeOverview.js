import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

export default function ChallengeOverview() {
	return (
		<section className="coding-challenges">
			<div className="lock-icon">
				<FontAwesomeIcon className="icon" icon={faWrench} size="lg" transform="down" />
			</div>
			<aside className="challenges">
				<section className="current-details">
					<header>
						<h3>Recursion Riddle</h3>
					</header>
					<body>
						<p>
							Your goal in this kata is to implement a difference function, which subtracts one list from
							another and returns the result.
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
			<aside className="challenges-support">
				<div className="challenge-stats">
					<h3>Current Rank</h3>
					<p>7</p>
					<h3>Current XP</h3>
					<p>125/150</p>
					<h3>Current Streak</h3>
					<p>17</p>
				</div>
				<div className="support-panel">
					<button className="btn-template-2">Practice</button>
					<button className="btn-template-2">Solutions</button>
					<button className="btn-template-2">Create</button>
				</div>
			</aside>
		</section>
	);
}
