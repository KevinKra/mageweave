import React from 'react'
import {Link} from "react-router-dom"
import "./NavBar.scss"

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="content">
        <h2>Mageweave</h2>
        <section>
          <Link to="/dashboard">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/profile">Profile</Link>
        </section>
      </div>
    </nav>
  )
}
