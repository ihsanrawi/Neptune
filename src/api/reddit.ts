import Snoowrap from 'snoowrap';
import credentials from '../credentials';

class Reddit {
	private snoo: Snoowrap | null = null;

	initAppOnly(accessToken: string): void {
		this.snoo = new Snoowrap({
			userAgent: credentials.userAgent,
			accessToken
		});
	}

	getSnoowrap(): Snoowrap {
		if (!this.snoo) {
			throw new Error(
				'Not authenticated with Reddit yet. Canoot create instance of Snoo'
			);
		}

		return this.snoo;
	}
}

// Singleton Pattern. Always return the same instance of snoo
const reddit = new Reddit();
export default reddit;
