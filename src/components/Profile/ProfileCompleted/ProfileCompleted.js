import React from 'react'
import "./ProfileCompleted.scss"
import CompleteBadge from '../../CompleteBadge/CompleteBadge';

export default function ProfileCompleted() {
  return (
    <section className="ProfileCompleted"> 
      <header>
        <p>Completed Courses</p>
      </header>
      <CompleteBadge title="Intro to JavaScript" score="95" difficulty="4" />
      <CompleteBadge title="Advanced JavaScript" score="75" difficulty="4" />
      <CompleteBadge title="OO Best Practices" score="90" difficulty="4" />
      <CompleteBadge title="AWS Practitioner" score="85" difficulty="3" />
    </section>
  )
}
