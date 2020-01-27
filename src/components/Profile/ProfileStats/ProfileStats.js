import React from 'react';
import './ProfileStats.scss';

const ProfileStats = () => {
	return (
		<section className="ProfileStats">
			<section className="streak-tracker">
				<h2>Streak:</h2>
				<div>
					<h4>Current</h4>
					<p>7 days</p>
				</div>
				<div>
					<h4>Longest</h4>
					<p>31 days</p>
				</div>
			</section>
			<section className="achievements" />
		</section>
	);
};

export default ProfileStats;
