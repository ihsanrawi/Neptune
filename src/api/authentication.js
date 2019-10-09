import Snoowrap from 'snoowrap';
import axios from 'axios';

import credentials from '../credentials';

const { protocol, host } = window.location;

const REDIRECT_URI = `${protocol}//${host}/authorize_callback`;

// https://github.com/reddit-archive/reddit/wiki/OAuth2#application-only-oauth
async function appOnlyOauth() {
	const formData = new FormData();
	formData.append(
		'grant_type',
		'https://oauth.reddit.com/grants/installed_client'
	);
	formData.append('device_id', 'DO_NOT_TRACK_THIS_DEVICE');

	let result = await axios
		.post('https://www.reddit.com/api/v1/access_token', formData, {
			headers: {
				Authorization: `Basic ${window.btoa(`${credentials.clientId}:`)}`
			}
		})
		.then(res => {
			// console.log(res.data);
			return res.data;
		})
		.catch(err => {
			console.log(err);
		});

	return result;
}

export default async function authenticate() {
	const appOnly = await appOnlyOauth();
	// console.log(appOnly);

	const _snoowrap = new Snoowrap({
		userAgent: credentials.userAgent,
		accessToken: appOnly.access_token
	});

	return _snoowrap;
}

export function getAuthUrl(state = '') {
	const options = {
		clientId: credentials.clientId,
		scope: [
			'identity',
			'mysubreddits',
			'subscribe',
			'vote',
			'submit',
			'save',
			'edit',
			'history',
			'read',
			'privatemessages',
			'account'
		],
		redirectUri: REDIRECT_URI,
		permanent: true,
		state: state // a random string, this could be validated when the user is redirected back
	};

	const authUrl = Snoowrap.getAuthUrl(options);
	return authUrl;
}
