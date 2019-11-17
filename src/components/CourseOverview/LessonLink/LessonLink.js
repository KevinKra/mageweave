import React from 'react'
import LessonMarker from '../../Widgets/LessonMarker/LessonMarker';
import "./LessonLink.scss"

export default function LessonLink(props) {
  return (
    <div className="LessonLink">
      <LessonMarker widget={props.widget} />
      <h4>{props.name}</h4>
    </div>
  )
}
