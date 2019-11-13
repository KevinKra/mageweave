import React from 'react'
import "./UserProfile.scss"
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import ProfileStats from '../../components/ProfileStats/ProfileStats';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import ProfileFeed from '../../components/ProfileFeed/ProfileFeed';
import ProfileCompleted from '../../components/ProfileCompleted/ProfileCompleted';

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <nav className="top-nav">
        <h3>Title</h3>
        <a href="">anchor</a>
        <a href="">anchor</a>
        <button>button</button>
      </nav>
      <ProfilePicture />
      <ProfileStats />
      <ProfileBio />
      <ProfileFeed />
      <ProfileCompleted />
    </div>
  )
}
