import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { fetchPosts, fetchMorePosts } from '../redux/actions/posts';

// import PostFeed from '../components/PostFeed';

class PostContainer extends Component {
	render() {
		// const { loading, loadingMore, posts } = this.props;
		return (
			<PostFeed
				posts={posts}
				loading={loading}
				loadingMore={loadingMore}
				loadMorePosts={this.loadMorePosts}
			/>
		);
	}
}

PostContainer.propTypes = {
	// loading: PropTypes.bool.isRequired,
	// loadingMore: PropTypes.bool.isRequired,
	// fetchPosts: PropTypes.func.isRequired,
	// fetchMorePosts: PropTypes.func.isRequired,
	// subreddit: PropTypes.string,
	// posts: PropTypes.array.isRequired
};

PostContainer.defaultProps = {
	// subreddit: ''
};

const mapStateToProps = ({ posts }) => {
	return {
		loading: posts.loading,
		loadingMore: posts.loadingMore,
		posts: posts.items
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchPosts: subreddit => {
			dispatch(fetchPosts(subreddit));
		},
		fetchMorePosts: subreddit => {
			dispatch(fetchMorePosts(subreddit));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostContainer);
