import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import CourseCard from '../../components/CourseCard/CourseCard';
import "./CatalogPage.scss";

export default function CatalogPage() {
  return (
    <section className="CatalogPage">
      <NavBar />
      <div className="catalog-content">
        <section className="courses">
          <CourseCard name="Ruby"/>
          <CourseCard name="JavaScript"/>
          <CourseCard name="AWS"/>
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
          <p>Create course, Create notes</p>
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
