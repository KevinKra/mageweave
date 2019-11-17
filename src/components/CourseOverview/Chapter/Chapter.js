import React from 'react'
import Section from '../Section/Section';
import "./Chapter.scss";

export default function Chapter(props) {
  const sections = 
      props.sections.map((lessons, i) => {
        return <Section key={i} lessons={lessons}/>
      });

  return (
    <section className="Chapter">
      <h3 className="chapter-title">{props.title}</h3>
      {sections}
    </section>
  )
}
