import React from 'react'
import "./NavBar.scss"

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h2>MageWeave</h2>
      <div>
        <a href="">Home</a>
        <a href="">Challenges</a>
        <button>Profile</button>
      </div>
    </nav>
  )
}
