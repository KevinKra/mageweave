import React from 'react'
import TopicBadge from '../TopicBadge/TopicBadge';
import "./Section.scss";

export default function Section(props) {
  const output = 
    props.lessons.map((lesson) => {
      return <TopicBadge lesson={lesson} type={lesson.type}/>
    })
  
    return (
      <section className="Section">
        {output}
      </section>
    )
}
