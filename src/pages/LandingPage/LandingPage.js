import React from 'react';
import "./LandingPage.scss";
import NavBar from '../../components/NavBar/NavBar';

export default function LandingPage() {
  return (
    <section className="LandingPage">
      {/* <NavBar /> */}
      <section className="splash-landing">
        <div className="title-card">
          <div className="title-card-text">
            <h1>Mageweave</h1>
            <ul>
              <li>Learn</li>
              <li>Study</li>
              <li>Practice</li>
              <li>Create</li>
            </ul>
          </div>
          <button className="button-one">Start Learning</button>
        </div>
      </section>
      <section className="support-content">
        <p>Additional Content</p>
      </section>
    </section>
  )
}
