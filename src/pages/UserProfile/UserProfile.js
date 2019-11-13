import React from 'react'
import "./UserProfile.scss"
import ProfilePicture from '../../components/Profile/ProfilePicture/ProfilePicture';
import ProfileStats from '../../components/Profile/ProfileStats/ProfileStats';
import ProfileBio from '../../components/Profile/ProfileBio/ProfileBio';
import ProfileFeed from '../../components/Profile/ProfileFeed/ProfileFeed';
import ProfileCompleted from '../../components/Profile/ProfileCompleted/ProfileCompleted';
import NavBar from '../../components/NavBar/NavBar';

export default function UserProfile() {
  return (
    <div className="UserProfile">
      <NavBar />
      <section className="profile-container">
              <ProfilePicture />
              <ProfileStats />
              <ProfileBio />
              <ProfileFeed />
              <ProfileCompleted />
      </section>
    </div>
  )
}
