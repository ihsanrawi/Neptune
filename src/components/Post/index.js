import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment-mini";
import {abbrNumber} from '../../utils';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PostContent from './PostContent/'
import './Post.scss';

export default function Post({ post }) {
  return (
    <div className="post-component">
      <div className="post-score">
        <button className="vote-button">
          <FontAwesomeIcon icon="arrow-up"/>
        </button>
        <div className="score">{abbrNumber(post.score)}</div>
        <button className="vote-button">
          <FontAwesomeIcon icon="arrow-down"/>
        </button>
      </div>

      <div className="post-data">
        <div className="post-title">{post.title}</div>

        <PostContent post={post} />

        <div className="post-date">
          {moment.unix(post.created_utc).fromNow()} by {post.author.name}
        </div>

        <div className="post-sub">{post.subreddit.display_name}</div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
