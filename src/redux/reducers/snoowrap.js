import { GET_SNOOWRAP, RECEIVE_SNOOWRAP } from '../actionTypes';

const initialState = {
	loading: true,
	snoowrap: null
};

export default function snoowrap(state = initialState, action) {
	switch (action.type) {
		case GET_SNOOWRAP:
			return {
				...state,
				loading: true
			};

		case RECEIVE_SNOOWRAP:
			return {
				...state,
				loading: false,
				snoowrap: action.snoowrap
			};

		default:
			return state;
	}
}
