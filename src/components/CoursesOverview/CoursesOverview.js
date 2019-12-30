import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import { Link } from 'react-router-dom';

export default function CoursesOverview() {
	return (
		<section className="courses-overview">
			<h3>Popular Courses:</h3>
			<div className="courses">
				<CourseCard name="Ruby" author="Mageweave" totalUsers="74" estimatedDuration="9h" />
				<CourseCard name="JavaScript" author="Mageweave" totalUsers="311" estimatedDuration="10h" />
				<CourseCard name="Rails" author="Mageweave" totalUsers="73" estimatedDuration="13h" />
				<CourseCard name="AWS Practitioner" author="Mageweave" totalUsers="545" estimatedDuration="21h" />
			</div>
			<Link to="courses/all">See Full Catalogue</Link>
		</section>
	);
}
