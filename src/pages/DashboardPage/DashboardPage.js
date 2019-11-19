import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import CourseCard from '../../components/CourseCard/CourseCard';
import {Link} from 'react-router-dom';
import "./DashboardPage.scss";

export default function DashboardPage() {
  return (
    <section className="DashboardPage">
      <NavBar />
      <div className="dashboard-content">
        <section className="courses-overview">
          <h3>Popular Courses:</h3>
          <div className="courses">
            <CourseCard 
              name="Ruby" 
              author="Mageweave" 
              totalUsers="74" 
              estimatedDuration="9h"
            />
            <CourseCard 
              name="JavaScript" 
              author="Mageweave" 
              totalUsers="311" 
              estimatedDuration="10h"
            />
            <CourseCard 
              name="Rails" 
              author="Mageweave" 
              totalUsers="73" 
              estimatedDuration="13h"
            />
            <CourseCard 
              name="AWS Practitioner" 
              author="Mageweave" 
              totalUsers="545" 
              estimatedDuration="21h"
            />
          </div>
          <Link to="courses/all">See Full Catalogue</Link>          
        </section>
        <section className="latest-course">
          <div className="latest-course-details">
            <h2>Latest Course Title</h2>
            <p>Course details</p>
          </div>
          <button className="latest-course-resume">
            Resume
          </button>
          <div className="latest-course-percentage">
            <p>Percentage %</p>
          </div>
        </section>
        <section className="author-options">
          <button>Create Course</button>
          <button>Write Lecture</button>
        </section>
        <section className="coding-challenges">
          <p>Coding Challenges</p>
        </section>
        <section className="qa-section">
          <p>Stackoverflow</p>
        </section>
      </div>
    </section>
  )
}
