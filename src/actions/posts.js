// import moment from 'moment-mini';
import {REQUEST_POSTS, RECEIVE_POSTS} from '../actionTypes';

/** Action creator */
const requestPosts = (subreddit) => {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

const receivePosts = (subreddit, posts) => {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts
  }
}

export const fetchPosts = (subreddit)  => {
  return async (dispatch, getState) => {
    const {snoowrap} = getState().snoowrap;

    dispatch(requestPosts(subreddit));
    const posts = await snoowrap.getHot(subreddit);
    dispatch(receivePosts(subreddit, posts));
  }
}
