import { combineReducers } from 'redux';
import snoowrap from './snoowrap';
import posts from './posts';

export default combineReducers({
  snoowrap,
  posts
})