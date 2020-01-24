import credentials from '../credentials';
import { AppOnlyTokens } from '../model';
// const { protocol, host } = window.location;
// const REDIRECT_URI = `${protocol}//${host}/authorize_callback`;

/**
 * Generates an access token for userless actions, aka Application Only OAuth.
 * Read more: https://github.com/reddit-archive/reddit/wiki/OAuth2#application-only-oauth
 */
export async function appOnlyOauth(): Promise<AppOnlyTokens> {
	const formData = new FormData();
	formData.append(
		'grant_type',
		'https://oauth.reddit.com/grants/installed_client'
	);
	formData.append('device_id', 'DO_NOT_TRACK_THIS_DEVICE');

	const res = await fetch('https://www.reddit.com/api/v1/access_token', {
		method: 'post',
		headers: {
			Authorization: `Basic ${window.btoa(`${credentials.clientId}:`)}`
		},
		body: formData
	});

	const json = await res.json();
	return json;
}
