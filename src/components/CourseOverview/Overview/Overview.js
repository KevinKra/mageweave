import React from 'react';
import Chapter from '../Chapter/Chapter';
import './Overview.scss';

const Overview = ({ data }) => {
	return (
		<section className="course-overview">
			<div className="course-section">
				<h2 className="main-title">{data.mainTitle}</h2>
				<Chapter
					title={data.chapters[0].chapterTitle}
					sections={data.chapters[0].sections}
					locked={data.chapters[0].locked}
				/>
				<Chapter
					title={data.chapters[1].chapterTitle}
					sections={data.chapters[1].sections}
					locked={data.chapters[1].locked}
				/>
				<Chapter
					title={data.chapters[2].chapterTitle}
					sections={data.chapters[2].sections}
					locked={data.chapters[2].locked}
				/>
			</div>
		</section>
	);
};

export default Overview;
