import React from 'react'
import LessonMarker from '../../Widgets/LessonMarker/LessonMarker';
import "./TopicBadge.scss"

export default function TopicBadge({type, lesson}) {
  switch(type) {
    case "lesson":
      return (
        <div className="lesson-badge badge">
          <LessonMarker widget={lesson.progress} />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "practice":
      return (
        <div className="practice-badge badge">
          <LessonMarker icon="practice" />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "challenge":
      return (
        <div className="challenge-badge badge">
          <LessonMarker icon="challenge" />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "project":
      return (
        <div className="project-badge badge">
          <LessonMarker icon="project" />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "test":
      return (
        <div className="test-badge badge">
          <h4>{lesson.name}</h4>
        </div>
      )
    default:
      return null;
  }
}
