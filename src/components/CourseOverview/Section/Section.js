import React from 'react'
import LessonLink from '../LessonLink/LessonLink';
import PracticeLink from '../PracticeLink/PracticeLink';
import TestLink from '../TestLink/TestLink';
import "./Section.scss";

export default function Section(props) {
  const output = 
    props.lessons.map((lesson) => {
      if (lesson.type === "lesson") {
        return <LessonLink name={lesson.name} progress={lesson.progress}/>;
      } else if (lesson.type === "practice") {
        return <PracticeLink name={lesson.name} />;
      } else if (lesson.type === "test") {
        return <TestLink name={lesson.name} />;
      } else {
        return <p>ERROR</p>
      }
    })
  
    return (
      <section className="Section">
        {output}
      </section>
    )
}
