import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import "./LessonMarker.scss"

export default function LessonMarker(props) {
  if (props.icon === "practice") {
    return (
      <div className="LessonMarker icon-format">
        <FontAwesomeIcon className="icon" icon={faBolt} size="md" transform="down" /> 
      </div>
    )
  } else {
    return (
      <div className="LessonMarker">
        <p>{props.widget}</p>
      </div>
    )
  }
}
