import React from "react";
import PropTypes from "prop-types";
import { isImgUrl } from "../../utils";
import './PostContent.scss';

function PostContent({ post }) {
  // TODO: cap text at three rows, make expandable
  if (post.is_self) {
    return (
      <div className="post-self-text">
        <p>{post.selftext}</p>
        <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
        <div className="overflow-overlay" />
      </div>
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
  return null;
}

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostContent;
