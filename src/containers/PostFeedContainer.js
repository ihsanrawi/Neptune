import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {fetchPosts, fetchMorePosts} from "../actions/posts";

import PostFeed from '../components/PostFeed';

class PostFeedContainer extends Component {
  componentDidMount = () => {
    this.loadPosts();
  }

  loadPosts = () => {
    const { subreddit } = this.props;
    try {
      this.props.fetchPosts(subreddit);
    } catch (error) {
      console.log(error);
    }
  }

  loadMorePosts = () => {
    const { subreddit } = this.props;
    
    try {
      console.log("More post fetched");
      this.props.fetchMorePosts(subreddit);
    } catch (error) {
      console.log(error);
    }
  }
  
  render() {
    const { loading, loadingMore, posts } = this.props;
    return (
      <PostFeed 
        posts = {posts}
        loading = {loading}
        loadingMore = {loadingMore}
        loadMorePosts = {this.loadMorePosts}
      />
    )
  }
}

PostFeedContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingMore: PropTypes.bool.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  fetchMorePosts: PropTypes.func.isRequired,
  subreddit: PropTypes.string,
  posts: PropTypes.array.isRequired,
};

PostFeedContainer.defaultProps = {
  subreddit: ""
}

const mapStateToProps = ({posts}) => {
  return {
    loading: posts.loading,
    loadingMore: posts.loadingMore,
    posts: posts.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (subreddit) => {
      dispatch(fetchPosts(subreddit));
    },
    fetchMorePosts: (subreddit) => {
      dispatch(fetchMorePosts(subreddit));
    }
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostFeedContainer);
