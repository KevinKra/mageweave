import React from 'react'
import "./LessonLink.scss"
import LessonMarker from '../../Widgets/LessonMarker/LessonMarker';

export default function LessonLink(props) {
  return (
    <div className="LessonLink">
      <LessonMarker widget={props.widget} />
      <h4>{props.name}</h4>
    </div>
  )
}
