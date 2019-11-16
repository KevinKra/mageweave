import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import LessonLink from '../../components/Course/LessonLink/LessonLink';
import "./CoursePage.scss";
import PracticeLink from '../../components/Course/PracticeLink/PracticeLink';
import TestLink from '../../components/Course/TestLink/TestLink';

export default class CoursePage extends Component {
  render() {
    return (
      <section className="CoursePage">
        <NavBar />
        <article className="course-page-content">
            <section className="course-overview">
              <div className="course-section">
                <h2>The Complete Ruby Course</h2>
                <div className="chapter-container">
                  <h3>Ruby Fundamentals</h3>
                  <div className="sub-chapter-level">
                    <LessonLink name="Intro to Ruby"/>
                  </div>
                  <div className="sub-chapter-level">
                    <div className="sibling-topics">
                      <PracticeLink name="Ruby Methods I Practice" />
                      <LessonLink name="Ruby Methods I"/>
                    </div>
                    <LessonLink name="Ruby Classes I"/>
                  </div>
                  <div className="sub-chapter-level">
                    <LessonLink name="The Weird Parts of Ruby" />
                  </div>
                  <div className="sub-chapter-level">
                    <div className="sibling-topics">
                      <PracticeLink name="Ruby Methods II/III Practice" />
                      <LessonLink name="Ruby Methods III"/>
                      <LessonLink name="Ruby Methods II"/>
                    </div>
                    <LessonLink name="Ruby Classes II"/>
                  </div>
                  <div className="sub-chapter-level">
                    <TestLink name="Ruby Fundamentals Test"/>
                  </div>
                </div>
                <div className="chapter-container">
                  <p>Chapter Title</p>
                </div>
                <div className="chapter-container">
                  <p>Chapter Title</p>
                </div>
              </div>
            </section>
            <section className="support-content">
              <p>support</p>
            </section>
        </article>
      </section>
    )
  }
}
