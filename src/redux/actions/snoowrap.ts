import { appOnlyOauth } from '../../api/authentication';
import { Dispatch } from 'redux';
import reddit from '../../api/reddit';
import { SnoowrapAuthType } from '../reducers/snoowrap';

import {
	REQUEST_SNOOWRAP,
	RECEIVE_SNOOWRAP,
	SNOOWRAP_ERROR
} from '../actionTypes';

/** Action creator */
function requestSnoowrap() {
	return {
		type: REQUEST_SNOOWRAP
	};
}

function receiveSnoowrap(authType: SnoowrapAuthType) {
	return {
		type: RECEIVE_SNOOWRAP,
		receivedAt: Date.now(),
		authType
	};
}

function snoowrapError() {
	return {
		type: SNOOWRAP_ERROR
	};
}

/**
 * Initializes Snoowrap with app only authentication,
 * when the user hasn't logged in with an account.
 */
export function initSnoowrap() {
	return async (dispatch: Dispatch) => {
		dispatch(requestSnoowrap());

		try {
			const authCredentials = await appOnlyOauth();
			const accessToken = authCredentials.access_token;

			reddit.initAppOnly(accessToken);

			dispatch(receiveSnoowrap('appOnly'));
		} catch (error) {
			console.error(error);
			dispatch(snoowrapError());
		}
	};
}
