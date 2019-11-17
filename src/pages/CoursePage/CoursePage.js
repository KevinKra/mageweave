import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import LessonLink from '../../components/CourseOverview/LessonLink/LessonLink';
import PracticeLink from '../../components/CourseOverview/PracticeLink/PracticeLink';
import TestLink from '../../components/CourseOverview/TestLink/TestLink';
import SupportTool from '../../components/CourseOverview/SupportTool/SupportTool';
import "./CoursePage.scss";

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
              <SupportTool />
            </div>
        </article>
      </section>
    )
  }
}
