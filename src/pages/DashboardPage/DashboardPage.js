import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CoursesOverview from '../../components/CoursesOverview/CoursesOverview';
import LatestCourse from '../../components/LatestCourse/LatestCourse';
import AuthorOverview from '../../components/AuthorOverview/AuthorOverview';
import ArticlesOverview from '../../components/ArticlesOverview/ArticlesOverview';
import ChallengesOverview from '../../components/ChallengesOverview/ChallengesOverview';
import './DashboardPage.scss';

const DashboardPage = () => {
	return (
		<section className="DashboardPage">
			<NavBar />
			<div className="dashboard-content">
				<CoursesOverview />
				<LatestCourse />
				<AuthorOverview />
				<ChallengesOverview />
				<section className="challenges-support">
					<h3>Practice</h3>
					<header className="results-panel">
						<h4>Rank: Youngling</h4>
						<div>
							<p>Points: 233/500</p>
							<p>Streak: 7</p>
						</div>
					</header>
					<footer className="support-panel">
						<button>Flashcards</button>
						<button>Games</button>
						<button>Quiz</button>
					</footer>
				</section>
				<ArticlesOverview />
			</div>
		</section>
	);
};

export default DashboardPage;
