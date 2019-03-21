// import moment from 'moment-mini';
import {REQUEST_POSTS, REQUEST_MORE_POSTS, RECEIVE_POSTS} from '../actionTypes';

/** Action creator */
const requestPosts = (subreddit) => {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

const requestMorePosts = (subreddit) => {
  return {
    type: REQUEST_MORE_POSTS,
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
    const state = getState();
    const {snoowrap} = state.snoowrap;

    dispatch(requestPosts(subreddit));
    const posts = await snoowrap.getHot(subreddit);
    dispatch(receivePosts(subreddit, posts));
  }
}

export const fetchMorePosts = (subreddit)  => {
  return async (dispatch, getState) => {
    const state = getState();
    const {items} = state.posts;

    dispatch(requestMorePosts(subreddit));
    const newPosts = await items.fetchMore({amount: 25});
    dispatch(receivePosts(subreddit, newPosts));
  }
}
