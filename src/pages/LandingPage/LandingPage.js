import React from 'react';
import { withRouter } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage = () => {
	const toCatalog = () => {
		this.props.history.push('/catalog');
	};
	return (
		<section className="LandingPage">
			<section className="splash-landing">
				<div className="title-card">
					<div className="title-card-text">
						<h1>Mageweave</h1>
						<ul>
							<li>Learn</li>
							<li>Study</li>
							<li>Practice</li>
							<li>Create</li>
						</ul>
					</div>
					<button className="button-one" onClick={toCatalog}>
						Start Learning
					</button>
				</div>
			</section>
			<section className="support-content">
				<p>Additional Content</p>
			</section>
		</section>
	);
};

export default withRouter(LandingPage);
