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
                <h2 className="main-title">The Complete Ruby Course</h2>
                <div className="chapter-container">
                  <h3 className="chapter-title">Ruby Fundamentals</h3>
                  <div className="sub-chapter-level">
                    <LessonLink name="Intro to Ruby"/>
                  </div>
                  <div className="sub-chapter-level">
                    <div className="sibling-topics">
                      <PracticeLink name="Ruby Methods I Practice" widget="1/5" />
                      <LessonLink name="Ruby Methods I" widget="2/4"/>
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
            <div className="sticky-wrapper">
              <section className="support-content">
                <section className="support-progress">
                  <div className="support-overview">
                    <h2>Chapter Progress:</h2>
                    <h3>17%</h3>
                    <h2>Today's XP:</h2>
                    <h3>175/1500</h3>
                  </div>
                </section>
                <section className="btn-panel">
                  <button className="btn-template-1">Flashcards</button>
                  <button className="btn-template-1">Practice</button>
                  <button className="btn-template-1">Quiz</button>
                </section>
              </section>
              <section className="support-get-help">
                <button className="btn-template-3">Ask a Question</button>
              </section>
              <section className="social-links">
                <h5>Follow Mageweave</h5>
                <div>
                  <button className="btn-template-2">Twitter</button>
                  <button className="btn-template-2">Facebook</button>
                  <button className="btn-template-2">Instagram</button>
                </div>
              </section>
            </div>
        </article>
      </section>
    )
  }
}
