import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import "./LandingPage.scss";


class LandingPage extends Component {
  toCatalog = () => {
    this.props.history.push('/catalog')
  }
  render() {
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
            <button className="button-one" onClick={this.toCatalog}>Start Learning</button>
          </div>
        </section>
        <section className="support-content">
          <p>Additional Content</p>
        </section>
      </section>
    )
  }
}

export default withRouter(LandingPage);
