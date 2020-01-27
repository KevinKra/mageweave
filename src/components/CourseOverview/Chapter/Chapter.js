import React from 'react';
import Section from '../Section/Section';
import './Chapter.scss';

const Chapter = ({ sections, locked, title }) => {
	const outputSections = sections.map((lessons, i) => {
		return <Section key={i} lessons={lessons} locked={locked} />;
	});
	return (
		<section className="Chapter">
			<h3 className="chapter-title">{title}</h3>
			{outputSections}
		</section>
	);
};

export default Chapter;
