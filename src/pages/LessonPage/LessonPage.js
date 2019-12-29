import React from 'react'
import "./LessonPage.scss"
import NavBar from '../../components/NavBar/NavBar';

export default function LessonPage() {
  return (
    <section className="LessonPage">
      <NavBar />
      <section className="lesson-page-content">
        <article className="lesson-content">
          <h1 className="lesson-title">Intro to Ruby</h1>
          <header>
            <h2 className="page-title">History of Ruby</h2>
            <h4>Part 1 of 3</h4>
          </header>
          <body>
            <p>
              Created in the mid 1990's, Ruby was developed by a Japanese engineer 
              named Yukihiro Matsumoto. "Matz", as he is more commonly known, aimed
              to create a language that was intended to be read easily by humans. The
              goal of making code that aimed to "write itself" contrasted from the more
              technical and computer readable coding languages of the time that were 
              difficult to approach and even more challenging to master.
            </p>
            <q> 
              I hope to see Ruby help every programmer in the world to be productive, 
              and to enjoy programming, and to be happy.
            </q>
            <span>- Matsumoto, 2008</span>
            <p>
              Though initially only popular and widely used in Japan, by the late 1990's
              and early 2000's, translations of the Ruby documentation into English
              along with the publishing of the book _Programming Ruby_, also written in English, 
              led to a dramatic increase in overseas adoption.
            </p>
            <p>
              Ruby follows the principle of least astonishment, or that the language should
              behave in a way that minimizes confusion for experienced users. It should be
              enjoyable and straightforward.
            </p>
        </body>
        </article>
        <aside className="support-content">
          <p>support!</p>
        </aside>
      </section>
    </section>
  )
}
