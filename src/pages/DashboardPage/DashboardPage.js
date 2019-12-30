import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ChallengeOverview from '../../components/ChallengeOverview/ChallengeOverview';
import CoursesOverview from '../../components/CoursesOverview/CoursesOverview';
import LatestCourse from '../../components/LatestCourse/LatestCourse';
import AuthorOverview from '../../components/AuthorOverview/AuthorOverview';
import ArticlesOverview from '../../components/ArticlesOverview/ArticlesOverview';
import './DashboardPage.scss';

export default function DashboardPage() {
	return (
		<section className="DashboardPage">
			<NavBar />
			<div className="dashboard-content">
				<CoursesOverview />
				<LatestCourse />
				<AuthorOverview />
				<ChallengeOverview />
				<ArticlesOverview />
			</div>
		</section>
	);
}
