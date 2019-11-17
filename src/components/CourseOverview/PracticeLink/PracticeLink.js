import React from 'react'
import LessonMarker from '../../Widgets/LessonMarker/LessonMarker';
import "./PracticeLink.scss"

export default function PracticeLink(props) {
  return (
    <div className="PracticeLink">
      <LessonMarker icon="practice" />
      <h4>{props.name}</h4>
    </div>
  )
}
