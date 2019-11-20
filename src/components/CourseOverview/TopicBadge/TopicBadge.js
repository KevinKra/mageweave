import React from 'react'
import LessonMarker from '../../Widgets/LessonMarker/LessonMarker';
import {withRouter} from "react-router-dom";
import "./TopicBadge.scss"

function TopicBadge({type, lesson, destination, history}) {
  const handleClick = (path) => {
    switch(type) {
      case "lesson":
        return history.push(`lesson${path}`)
      case "practice":
        return history.push(`practice${path}`)
      case "challenge":
        return history.push(`challenge${path}`)
      case "project":
        return history.push(`project${path}`)
      case "test":
        return history.push(`test${path}`)
      default:
        return history.push(`error-path`)
    }
  }
  switch(type) {
    case "lesson":
      return (
        <div className="lesson-badge badge" onClick={() => handleClick(destination)}>
          <LessonMarker widget={lesson.progress} />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "practice":
      return (
        <div className="practice-badge badge" onClick={() => handleClick(destination)}>
          <LessonMarker icon="practice" />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "challenge":
      return (
        <div className="challenge-badge badge" onClick={() => handleClick(destination)}>
          <LessonMarker icon="challenge" />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "project":
      return (
        <div className="project-badge badge" onClick={() => handleClick(destination)}>
          <LessonMarker icon="project" />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "test":
      return (
        <div className="test-badge badge" onClick={() => handleClick(destination)}>
          <h4>{lesson.name}</h4>
        </div>
      )
    default:
      return null;
  }
}

export default withRouter(TopicBadge)
