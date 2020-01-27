import React from 'react';
import SupportTool from '../../components/CourseOverview/SupportTool/SupportTool';
import Overview from '../../components/CourseOverview/Overview/Overview';
import './CoursePage.scss';

const CoursePage = () => {
	return (
		<section className="CoursePage">
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
