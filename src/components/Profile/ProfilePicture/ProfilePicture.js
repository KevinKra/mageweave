import React from 'react'
import "./ProfilePicture.scss"

export default function ProfilePicture() {
  return (
    <div className="ProfilePicture">
      <section className="image-container">
        <img src="https://avatars1.githubusercontent.com/u/43081008?s=460&v=4" alt=""/>
      </section>
      <section className="text-tag">
        <p>Always Learning.</p>
      </section>
    </div>
  )
}
