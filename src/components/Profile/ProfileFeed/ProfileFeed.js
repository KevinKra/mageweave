import React from 'react'
import FeedUnit from '../../FeedUnit/FeedUnit';
import "./ProfileFeed.scss"

export default function ProfileFeed() {
  return (
    <div className="ProfileFeed">
      <header>
        <h3>Recent Activity</h3>
      </header>
      <FeedUnit message="{user.name} completed the {course.title} course!" points="150" date="12/21/19"/>
      <FeedUnit message="Kevin completed the Intro to Ruby course!" points="250" date="12/19/19"/>
      <FeedUnit message="Kevin completed the OOP Advanced Concepts course!" points="50" date="12/15/19"/>
      <FeedUnit message="Kevin completed the OOP Advanced Concepts quiz!" points="100" date="12/15/19"/>
      <FeedUnit message="Kevin completed the Intro to React course!" points="50" date="12/14/19"/>
      <FeedUnit message="Kevin just created an account!" points="15" date="12/14/19"/>
    </div>
  )
}
