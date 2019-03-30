import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment-mini";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import randomColor from "randomcolor";

import {abbrNumber} from '../../utils';
import PostContent from '../PostContent/';
import './Post.scss';

export default function Post({ post }) {
  const color = randomColor({
    seed: post.subreddit.display_name
  });
  
  const user = <div className="user">u/{post.author.name}</div>

  return (
    <div className="post-component">
      <div className="post-score">
        <button className="vote-button vote-up">
          <FontAwesomeIcon icon="arrow-up"/>
        </button>
        <div className="score">{abbrNumber(post.score)}</div>
        <button className="vote-button vote-down">
          <FontAwesomeIcon icon="arrow-down"/>
        </button>
      </div>

      <div className="post-data">
        <div className="post-sub" style={{ color: color}}>
          <small>{post.subreddit_name_prefixed}</small>
          {/* TODO: Move flair to another div */}
          {post.over_18 &&
            <span className=" post-tag nsfw-tag">NSFW</span>
          }
        </div>
          <div className="post-title">{post.title}</div>
        <div className="content-wrapper">
          <PostContent post={post} />
        </div>
        <div className="bottom-layout">
          <div className="post-info">
            <small>Posted by {user} - {moment.unix(post.created_utc).fromNow()}</small>
          </div>
          <div className="post-comment">
            <small>{abbrNumber(post.num_comments)} Comments</small>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
