import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBolt,
	faPencilRuler,
	faCode
} from '@fortawesome/free-solid-svg-icons';
import './LessonMarker.scss';

export default function LessonMarker({ icon, widget }) {
	if (icon === 'practice') {
		return (
			<div className="LessonMarker icon-bolt">
				<FontAwesomeIcon
					className="icon"
					icon={faBolt}
					size="md"
					transform="down"
				/>
			</div>
		);
	} else if (icon === 'project') {
		return (
			<div className="LessonMarker icon-project">
				<FontAwesomeIcon
					className="icon"
					icon={faPencilRuler}
					size="md"
					transform="down"
				/>
			</div>
		);
	} else if (icon === 'challenge') {
		return (
			<div className="LessonMarker icon-challenge">
				<FontAwesomeIcon
					className="icon"
					icon={faCode}
					size="md"
					transform="down"
				/>
			</div>
		);
	} else {
		return (
			<div className="LessonMarker">
				<p>{widget}</p>
			</div>
		);
	}
}
