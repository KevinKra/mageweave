import React from 'react'
import "./NavBar.scss"

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="content">
        <h2>Mageweave</h2>
        <section>
          <a href="">Home</a>
          <a href="">Learn</a>
          <a href="">Challenges</a>
          <a href="">Profile</a>
        </section>
      </div>
    </nav>
  )
}
