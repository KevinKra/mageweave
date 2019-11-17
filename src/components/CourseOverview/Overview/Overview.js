import React from 'react'
import Chapter from '../Chapter/Chapter';
import "./Overview.scss"

export default function Overview(props) {
  return (
    <section className="course-overview">
      <div className="course-section">
        <h2 className="main-title">{props.data.mainTitle}</h2>
        <Chapter title={props.data.chapters[0].chapterTitle} sections={props.data.chapters[0].sections}/>
        <Chapter title={props.data.chapters[1].chapterTitle} sections={props.data.chapters[1].sections}/>
      </div>
    </section>
  )
}
