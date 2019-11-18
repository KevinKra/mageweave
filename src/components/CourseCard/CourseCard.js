import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons'
import "./CourseCard.scss";

class CourseCard extends Component {
  handleRedirect = () => {
    this.props.history.push(`courses/${this.props.name.toLowerCase()}`);
  }
  render() {
    return (
      <article className="CourseCard" onClick={this.handleRedirect}>
        <div className="card-interior">
          <div className="card-details">
            <h4>{this.props.name}</h4>
            <p>by <span>{this.props.author}</span></p>
          </div>
          <div className="card-stats">
            <div>
              <FontAwesomeIcon 
                className="icon" 
                icon={faUser} 
                size="md" 
                transform="down" 
              /> 
              <p>{this.props.totalUsers}</p>
            </div>
            <div>
              <FontAwesomeIcon 
                  className="icon" 
                  icon={faClock} 
                  size="md" 
                  transform="down" 
                /> 
              <p>{this.props.estimatedDuration}</p>
            </div>
          </div>
        </div>
      </article>
    )
  }
}

export default withRouter(CourseCard);
