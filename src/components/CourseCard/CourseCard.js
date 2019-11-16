import React from 'react';
import "./CourseCard.scss";

export default function CourseCard(props) {
  return (
    <div className="CourseCard">
      <p>{props.name}</p>
    </div>
  )
}
