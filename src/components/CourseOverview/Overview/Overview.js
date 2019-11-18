import React from 'react'
import Chapter from '../Chapter/Chapter';
import "./Overview.scss"

export default function Overview({data}) {
  return (
    <section className="course-overview">
      <div className="course-section">
        <h2 className="main-title">{data.mainTitle}</h2>
        <Chapter title={data.chapters[0].chapterTitle} sections={data.chapters[0].sections} locked={data.chapters[0].locked}/>
        <Chapter title={data.chapters[1].chapterTitle} sections={data.chapters[1].sections} locked={data.chapters[1].locked}/>
      </div>
    </section>
  )
}
