import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons'
import "./ProfileBio.scss"

export default function ProfileBio() {
  return (
    <section className="ProfileBio"> 
      <section className="overview">
        <h2>Kevin Krato</h2>   
        <div className="location">
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} size="sm" transform="down-2" /> 
          <h4>Denver, Colorado</h4>
        </div>
      </section>
      <section className="body">
        <p>I am a graduate of the Turing School of Software and Design. I love designing and building applications!</p>
        <section className="website-link">
          <FontAwesomeIcon className="icon" icon={faLink} size="sm" transform="down-2" /> 
          <a href="www.kevinkrato.com">www.kevinkrato.com</a>
        </section>
      </section>
    </section>
  )
}
