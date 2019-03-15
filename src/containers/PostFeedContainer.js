import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {fetchPosts} from "../actions/posts";

import Loading from '../components/Loading'
import Post from '../components/Post'

class PostFeedContainer extends Component {
  componentDidMount = () => {
    const { subreddit } = this.props;
    try {
      this.props.fetchPosts(subreddit);
  } catch (error) {
      console.log(error);
    }
  }
  
  render() {
    const { loading, posts } = this.props;

    if(loading){
      return <Loading />
    }

    if(posts.length === 0) {
      return <div>No post found. Go outside and play. :D</div>
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
    }
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostFeedContainer);
