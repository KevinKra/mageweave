import React, {Fragment} from 'react'
import "./SupportTool.scss"

export default function SupportTool() {
  return (
    <Fragment>
      <section className="support-content">
        <section className="support-progress">
          <div className="support-overview">
            <h2>Chapter Progress:</h2>
            <h3>17%</h3>
            <h2>Today's XP:</h2>
            <h3>175/1500</h3>
          </div>
        </section>
        <section className="btn-panel">
          <button className="btn-template-1">Flashcards</button>
          <button className="btn-template-1">Practice</button>
          <button className="btn-template-1">Quiz</button>
        </section>
      </section>
      <section className="support-get-help">
        <button className="btn-template-3">Ask a Question</button>
      </section>
      <section className="social-links">
        <h5>Follow Mageweave</h5>
        <div>
          <button className="btn-template-2">Twitter</button>
          <button className="btn-template-2">Facebook</button>
          <button className="btn-template-2">Instagram</button>
        </div>
      </section>
    </Fragment>
  )
}
