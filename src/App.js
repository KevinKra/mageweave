import React from 'react';
import UserProfile from './pages/UserProfile/UserProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CoursePage from './pages/CoursePage/CoursePage';
import LessonPage from './pages/LessonPage/LessonPage';
import AuthPage from './pages/AuthPage/AuthPage';
import NavBar from './components/NavBar/NavBar';
import ruby from './mockData';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<DashboardPage />
					</Route>
					<Route path="/dashboard">
						<DashboardPage />
					</Route>
					<Route path="/authenticate">
						<AuthPage />
					</Route>
					<Route path="/profile">
						<UserProfile />
					</Route>
					<Route exact path="/courses">
						{/* <CoursePage /> */}
					</Route>
					<Route exact path="/courses/ruby">
						<CoursePage course={ruby} />
					</Route>
					<Route exact path="/courses/lesson/intro-to-ruby">
						<LessonPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};
