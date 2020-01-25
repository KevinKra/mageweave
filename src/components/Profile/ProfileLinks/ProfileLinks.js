import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faGithubSquare,
	faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';
import './ProfileLinks.scss';

export default function ProfileLinks() {
	return (
		<section className="ProfileLinks">
			{/* <h3>External Links:</h3> */}
			<article>
				<FontAwesomeIcon
					className="icon"
					icon={faLinkedin}
					size="xlg"
					transform="down"
				/>
				<a href="/">Linkedin</a>
			</article>
			<article>
				<FontAwesomeIcon
					className="icon"
					icon={faGithubSquare}
					size="2x"
					transform="down"
				/>
				<a href="/">Github</a>
			</article>
			<article>
				<FontAwesomeIcon
					className="icon"
					icon={faFacebookSquare}
					size="2x"
					transform="down"
				/>
				<a href="/">Facebook</a>
			</article>
		</section>
	);
}
