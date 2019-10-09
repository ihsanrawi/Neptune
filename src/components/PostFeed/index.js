import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './PostFeed.scss';

import Loading from '../Loading';
import Post from '../Post';

function PostFeed({ posts, loading, loadMorePosts, loadingMore }) {
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	function handleScroll() {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
			document.documentElement.offsetHeight
		)
			return;
		loadMorePosts();
	}

	if (loading) {
		return <Loading type='fullscreen' />;
	}

	if (posts.length === 0) {
		return <div>No post found. :C</div>;
	}

	return (
		<div className='post-feed'>
			{posts.map(post => (
				<Post key={post.id} post={post} />
			))}
			{loadingMore && <Loading type='inline' />}
		</div>
	);
}

PostFeed.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object).isRequired,
	loading: PropTypes.bool.isRequired,
	loadMorePosts: PropTypes.func.isRequired,
	loadingMore: PropTypes.bool.isRequired
};

export default PostFeed;
