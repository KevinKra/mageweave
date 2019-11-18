import React from 'react'
import TopicBadge from '../TopicBadge/TopicBadge';
import "./Section.scss";

export default function Section({lessons, locked}) {
  const output = 
    lessons.map((lesson) => {
      return <TopicBadge lesson={lesson} type={lesson.type}/>
    })
  
    if (locked === true) {
      return (
        <section className="Section locked">
          {output}
        </section>
      )
    } else {
      return (
        <section className="Section">
          {output}
        </section>
      )
    }
}
