import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import CourseCard from '../../components/CourseCard/CourseCard';
import "./DashboardPage.scss";

export default function DashboardPage() {
  return (
    <section className="DashboardPage">
      <NavBar />
      <div className="dashboard-content">
        <section className="courses-overview">
          <h3>Popular Courses:</h3>
          <div className="courses">
            <CourseCard name="Ruby"/>
            <CourseCard name="JavaScript"/>
            <CourseCard name="AWS Practitioner"/>
            <CourseCard name="AWS Developer"/>
            <CourseCard name="AWS DevOps"/>
          </div>
          <a href="">See Full Catalog</a>
        </section>
        <section className="latest-course">
          <div className="latest-course-details">
            <h2>Course Title</h2>
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
