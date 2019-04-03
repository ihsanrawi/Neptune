import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { isImgUrl } from "../../utils";
import './PostContent.scss';

function PostContent({ post }) {
  if (post.is_self) {
    return (
      <div className="post-self-text">
        <p>{post.selftext}</p>
        <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
        <div className="overflow-overlay" />
      </div>
    );
  }

  // embedded video
  if (post.is_video && post.post_hint === "hosted:video") {
    return (
      <video className="post-preview-video" 
        src={post.media.reddit_video.fallback_url} 
        loop = {true} 
        autoPlay = {true}
        muted = {true}
      />
    );
  }

  // rich video like YouTube
  if (post.post_hint === "rich:video") {
    return (
      <div dangerouslySetInnerHTML={{ __html: post.media.oembed.html }} />
    );
  }
  
  // image preview
  if (isImgUrl(post.url)) {
    return <img className="post-preview-img" src={post.url} alt={post.title} />;
  }

  // handle non-direct imgur links
  if (post.domain === "imgur.com") {
    return (
      <img
        className="post-preview-img"
        src={`${post.url}.jpg`}
        alt={post.title}
      />
    );
  }

  let thumbnail;

  //handle external content link
  if(post.post_hint === 'link') {
    if(post.preview) {
      thumbnail = (
        <img
          className="post-preview-img"
          src={post.preview.images[0].source.url}
          alt={post.title}
        />
      )
    }

    return (
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <div className="flex">
          <div className="icon">
            <FontAwesomeIcon icon={"window-maximize"}/>
          </div>
          <div className="url">
            {post.url}
          </div>
        </div>
        {thumbnail}
      </a>
    )
  }
  return null;
}

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostContent;
