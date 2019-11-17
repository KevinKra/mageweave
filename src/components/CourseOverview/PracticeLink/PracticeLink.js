import React from 'react'
import "./PracticeLink.scss"
import LessonMarker from '../../Widgets/LessonMarker/LessonMarker';

export default function PracticeLink(props) {
  return (
    <div className="PracticeLink">
      <LessonMarker icon="practice" />
      <h4>{props.name}</h4>
    </div>
  )
}
