// import moment from 'moment-mini';
import {
	REQUEST_POSTS,
	REQUEST_MORE_POSTS,
	RECEIVE_POSTS,
	FETCH_POST_ERROR
} from '../actionTypes';
import { PostsSortMode, PostsTimes, PostsState } from '../reducers/posts';
import { Submission } from 'snoowrap';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../reducers';
import reddit from '../../api/reddit';

export const DEFAULT_SORT_MODE = 'best';

/** Action creator */
function requestPosts(
	subreddit: string,
	sortMode: PostsSortMode,
	time: PostsTimes
) {
	return {
		type: REQUEST_POSTS,
		subreddit,
		sortMode,
		time
	};
}

function requestMorePosts(subreddit: string) {
	return {
		type: REQUEST_MORE_POSTS,
		subreddit
	};
}

function receivePosts(subreddit: string, posts: Submission[]) {
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts,
		receivedAt: Date.now()
	};
}

function fetchPostError(subreddit: string) {
	return {
		type: FETCH_POST_ERROR,
		subreddit
	};
}

export function fetchPosts(
	subreddit: string,
	sortMode: PostsSortMode = DEFAULT_SORT_MODE,
	time: PostsTimes = 'month'
) {
	return async (
		dispatch: ThunkDispatch<PostsState, void, Action>,
		getState: () => RootState
	) => {
		const state = getState();
		const _r = reddit.getSnoowrap();
		dispatch(requestPosts(subreddit, sortMode, time));

		try {
			let posts;
			const sub = subreddit ? `/${subreddit}` : '';

			// best, hot, new, top, controversial, rising
			switch (sortMode) {
				case 'hot':
					posts = await _r.getHot(subreddit);
					break;
				case 'new':
					posts = await _r.getNew(subreddit);
					break;
				case 'top':
					posts = await _r.getTop(subreddit, { time });
					break;
				case 'controversial':
					posts = await _r.getControversial(subreddit, { time });
					break;
				case 'rising':
					posts = await _r.getRising(subreddit);
					break;
				default:
					posts = await _r.oauthRequest({ uri: `${sub}/best`, method: 'get' });
			}
			dispatch(receivePosts(subreddit, posts));
		} catch (error) {
			console.error(error);
			dispatch(fetchPostError(subreddit));
		}
	};
}

export function fetchMorePosts(subreddit: string) {
	return async (
		dispatch: ThunkDispatch<PostsState, void, Action>,
		getState: () => RootState
	) => {
		const { originalListing } = getState().posts.bySubreddit[subreddit];

		if (originalListing === null) {
			console.error(
				'Tried to fetch more but listing was null. Subrredit: ',
				subreddit
			);
			return;
		}

		dispatch(requestMorePosts(subreddit));

		// fetch more with return listing with previous and new posts
		const newPosts = await originalListing.fetchMore({ amount: 25 });

		dispatch(receivePosts(subreddit, newPosts));
	};
}
