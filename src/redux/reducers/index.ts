import { combineReducers } from 'redux';
import snoowrap, { SnoowrapStates } from './snoowrap';
import posts, { PostsState } from './posts';

export type RootState = {
	posts: PostsState;
	snoowrap: SnoowrapStates;
};

export default combineReducers({
	snoowrap,
	posts
});
