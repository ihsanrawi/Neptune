import authenticate from '../../api/authentication';
import { GET_SNOOWRAP, RECEIVE_SNOOWRAP } from '../actionTypes';

/** Action creator */
const requestSnoowrap = () => {
	return {
		type: GET_SNOOWRAP
	};
};

const receiveSnoowrap = snoowrap => {
	return {
		type: RECEIVE_SNOOWRAP,
		snoowrap
	};
};

export const initSnoowrap = () => {
	return async dispatch => {
		dispatch(requestSnoowrap());
		const snoowrap_ = await authenticate();
		dispatch(receiveSnoowrap(snoowrap_));
	};
};
