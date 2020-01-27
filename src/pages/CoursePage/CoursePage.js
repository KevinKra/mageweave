import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SupportTool from '../../components/CourseOverview/SupportTool/SupportTool';
import Overview from '../../components/CourseOverview/Overview/Overview';
import './CoursePage.scss';

const CoursePage = () => {
	return (
		<section className="CoursePage">
			<NavBar />
			<article className="course-page-content">
				<Overview data={this.props.course} />
				<div className="sticky-wrapper">
					<SupportTool />
				</div>
			</article>
		</section>
	);
};

export default CoursePage;
