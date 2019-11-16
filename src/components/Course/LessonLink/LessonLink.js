import React from 'react'
import "./LessonLink.scss"

export default function LessonLink(props) {
  return (
    <div className="LessonLink">
      <h4>{props.name}</h4>
    </div>
  )
}
