import React from 'react';
import './UserProfile.scss';
import ProfilePicture from '../../components/Profile/ProfilePicture/ProfilePicture';
import ProfileStats from '../../components/Profile/ProfileStats/ProfileStats';
import ProfileBio from '../../components/Profile/ProfileBio/ProfileBio';
import ProfileFeed from '../../components/Profile/ProfileFeed/ProfileFeed';
import ProfileCompleted from '../../components/Profile/ProfileCompleted/ProfileCompleted';
import ProfileLinks from '../../components/Profile/ProfileLinks/ProfileLinks';

const UserProfile = () => {
	return (
		<div className="UserProfile">
			<section className="profile-container">
				<ProfilePicture />
				<ProfileStats />
				<ProfileBio />
				<ProfileLinks />
				<ProfileFeed />
				<ProfileCompleted />
			</section>
		</div>
	);
};

export default UserProfile;
