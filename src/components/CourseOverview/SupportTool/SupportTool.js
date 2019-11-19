import React, {Fragment} from 'react'
import "./SupportTool.scss"

export default function SupportTool() {
  return (
    <section className="SupportTool">
      <section className="support-content">
        <section className="support-progress">
          <div className="support-overview">
            <aside className="progress-container">
              <h3>Progress:</h3>
              <div className="progress-circle">
                <h4 className="circle-xp">17%</h4>
              </div>
            </aside>
            <aside className="goal-container">
              <h3>Daily Goal:</h3>
              <h4>175xp</h4>
            </aside>
            <aside className="xp-container">
              <h3>XP:</h3>
              <h4>100/175px</h4>
            </aside>
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
    </section>
  )
}
