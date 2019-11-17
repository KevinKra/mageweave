import React from 'react'
import "./LessonMarker.scss"

export default function LessonMarker(props) {
  return (
    <div className="LessonMarker">
      <p>{props.widget}</p>
    </div>
  )
}
