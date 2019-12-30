import React from 'react';

export default function LatestCourse() {
	return (
		<section className="latest-course">
			<div className="latest-course-details">
				<h2>JavaScript</h2>
				<p class="course-brief">A comprehensive look at Javascript from the little bits to the big bits.</p>
				<section className="course-stats">
					<aside className="progress-circle">
						<h3>0%</h3>
					</aside>
					<aside className="progress-fractions">
						<div>
							<h4>Chapters</h4>
							<p>0/4</p>
						</div>
						<div>
							<h4>Projects</h4>
							<p>0/2</p>
						</div>
						<div>
							<h4>Challenges</h4>
							<p>0/3</p>
						</div>
					</aside>
				</section>
			</div>
			<button className="latest-course-resume">Resume</button>
		</section>
	);
}
