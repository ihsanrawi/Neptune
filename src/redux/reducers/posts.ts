import {
	REQUEST_POSTS,
	REQUEST_MORE_POSTS,
	RECEIVE_POSTS
} from '../actionTypes';
import { Submission, Listing } from 'snoowrap';

export type IdPostDict = {
	[key: string]: Submission;
};
export type PostsSortMode =
	| 'best'
	| 'hot'
	| 'top'
	| 'controversial'
	| 'new'
	| 'rising'
	| '';

export type PostsTimes = 'all' | 'hour' | 'day' | 'week' | 'month' | 'year';

export type PostsInSubState = {
	/** items will be a list of post IDs */
	items: string[];
	/** The original listing object fetched by Snoowrap, used when fetching more */
	originalListing: Listing<Submission> | null;
	sortMode: PostsSortMode;
	time: PostsTimes;
	receivedAt: Date | null;
	isLoading: boolean;
	isLoadingMore: boolean;
	error: boolean;
};
export type PostsState = {
	byId: IdPostDict;
	bySubreddit: {
		[key: string]: PostsInSubState;
	};
};

const initialState = {
	loading: false,
	loadingMore: false,
	items: []
};

export default function posts(state = initialState, action) {
	switch (action.type) {
		case REQUEST_POSTS:
			return {
				...state,
				loading: true
			};

		case REQUEST_MORE_POSTS:
			return {
				...state,
				loadingMore: true
			};

		case RECEIVE_POSTS:
			return {
				...state,
				loading: false,
				loadingMore: false,
				items: action.posts
			};

		default:
			return state;
	}
}
