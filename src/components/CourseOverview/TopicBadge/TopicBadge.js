import React from 'react'
import LessonMarker from '../../Widgets/LessonMarker/LessonMarker';
import "./TopicBadge.scss"

export default function TopicBadge({type, lesson}) {
  switch(type) {
    case "lesson":
      return (
        <div className="LessonBadge">
          <LessonMarker widget={lesson.progress} />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "practice":
      return (
        <div className="PracticeBadge">
          <LessonMarker icon="practice" />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "project":
      return (
        <div className="PracticeBadge">
          <LessonMarker icon="practice" />
          <h4>{lesson.name}</h4>
        </div>
      )
    case "test":
      return (
        <div className="TestBadge">
          <h4>{lesson.name}</h4>
        </div>
      )
    default:
      return null;
  }
}
