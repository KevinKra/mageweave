import React from 'react'
import "./PointsMarker.scss";

export default function PointsMarker(props) {
  return (
    <div className="PointsMarker">
      <p>{props.points}pts</p>
    </div>
  )
}