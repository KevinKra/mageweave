import React from 'react';
import PointsMarker from '../../Widgets/PointsMarker/PointsMarker';
import RankMarker from '../../Widgets/RankMarker/RankMarker';
import './ProfilePicture.scss';

const ProfilePicture = () => {
	return (
		<section className="ProfilePicture">
			<RankMarker rank="1" />
			<PointsMarker points="500,000,000" />
			<section className="image-container">
				<img
					src="https://avatars1.githubusercontent.com/u/43081008?s=460&v=4"
					alt=""
				/>
			</section>
			<section className="text-tag">
				<p className="motto">Always Learning.</p>
			</section>
		</section>
	);
};

export default ProfilePicture;
