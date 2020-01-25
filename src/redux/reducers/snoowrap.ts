import {
	REQUEST_SNOOWRAP,
	RECEIVE_SNOOWRAP,
	SNOOWRAP_ERROR
} from '../actionTypes';

export type SnoowrapAuthType = 'auth' | 'appOnly' | null;

export type SnoowrapStates = {
	isLoading: boolean;
	receivedAt: Date | null;
	authType: SnoowrapAuthType;
	errorMsg: string;
};

const initialState: SnoowrapStates = {
	isLoading: true,
	receivedAt: null,
	authType: null,
	errorMsg: ''
};

export default function snoowrap(
	state = initialState,
	action: any
): SnoowrapStates {
	switch (action.type) {
		case REQUEST_SNOOWRAP:
			return {
				...state,
				isLoading: true,
				errorMsg: ''
			};

		case RECEIVE_SNOOWRAP:
			return {
				...state,
				isLoading: false,
				receivedAt: action.receivedAt,
				authType: action.authType,
				errorMsg: ''
			};

		case SNOOWRAP_ERROR:
			return {
				...state,
				isLoading: false,
				errorMsg: 'Something went wrong.'
			};

		default:
			return state;
	}
}
