import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faBookmark } from '@fortawesome/free-solid-svg-icons';

const ArticlesOverview = () => {
	return (
		<section className="articles-section">
			<div className="lock-icon">
				<FontAwesomeIcon
					className="icon"
					icon={faWrench}
					size="lg"
					transform="down"
				/>
			</div>
			<h3>Popular Articles</h3>
			<article className="article-link">
				<header>
					<h4 className="article-title">
						Lets Build an API in Rails
					</h4>
				</header>
				<body>
					<p>
						Build an API in Rails and connect your database to the
						world.
					</p>
				</body>
				<footer className="article-contents">
					<p>
						<span>by</span> Mageweave
					</p>
					<p>
						<span>topics:</span> Ruby, Rails-api
					</p>
				</footer>
				<aside className="bookmark-container">
					<FontAwesomeIcon
						className="icon"
						icon={faBookmark}
						size="lg"
						transform="down"
					/>
				</aside>
			</article>
		</section>
	);
};

export default ArticlesOverview;
