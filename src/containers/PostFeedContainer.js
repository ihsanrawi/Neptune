import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {fetchPosts, fetchMorePosts} from "../actions/posts";

import Loading from '../components/Loading'
import Post from '../components/Post'

class PostFeedContainer extends Component {
  componentDidMount = () => {
    this.loadPosts();
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.posts.length
    ) {
      // this.loadMorePosts();
    }
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
      this.props.fetchMorePosts(subreddit);
    } catch (error) {
      console.log(error);
    }
  }
  
  render() {
    const { loading, posts } = this.props;

    if(loading){
      return <Loading type="fullscreen"/>
    }

    if(posts.length === 0) {
      return <div>No post found. :C</div>
    }


    return (
      <div className="post-feed">
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }
}

PostFeedContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
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
