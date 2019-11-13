import React from 'react'
import "./FeedUnit.scss";

export default function FeedUnit(props) {
  return (
    <article className="FeedUnit">
      <div className="award">
        <p>Award</p>
      </div>
      <section className="award-details">
        <p className="award-message">{props.message}</p>
        <p>Points: {props.points}</p>
        <p>Date: {props.date}</p>
      </section>
    </article>
  )
}
