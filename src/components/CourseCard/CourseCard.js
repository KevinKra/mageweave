import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import "./CourseCard.scss";

class CourseCard extends Component {
  handleRedirect = () => {
    this.props.history.push(`courses/${this.props.name.toLowerCase()}`);
  }
  render() {
    return (
      <div className="CourseCard" onClick={this.handleRedirect}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default withRouter(CourseCard);
