import React from 'react'
import "./NavBar.scss"

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="content">
        <h2>Mageweave</h2>
        <div>
          <a href="">Home</a>
          <a href="">Challenges</a>
          <button>Profile</button>
        </div>
      </div>
    </nav>
  )
}
