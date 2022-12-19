#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import got from 'got';

meow(`
	Usage
	  $ is-ovhcloud-down
	  🦄  It's down. Go outside!
`, {
	importMeta: import.meta,
});

(async () => {
	const {statusCode} = await got('https://ovhcloud.com', {
		timeout: 10_000,
		retry: 2,
	});

	if (statusCode !== 200) {
		console.log('\n🦄  It\'s down!');
		process.exitCode = 1;
		return;
	}

	console.error('\n 🐈  It\'s up!');
	process.exitCode = 0;
})();
