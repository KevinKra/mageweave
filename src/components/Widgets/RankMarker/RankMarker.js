import React from 'react'
import "./RankMarker.scss";

export default function RankMarker(props) {
  return (
    <div className="RankMarker">
      <h2>Rank: {props.rank}</h2>
    </div>
  )
}