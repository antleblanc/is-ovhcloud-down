#!/usr/bin/env node
'use strict';
const meow = require('meow');
const got = require('got');

meow(`
	Usage
	  $ is-ovh-down
	  🦄  It's down. Go outside!
`);

got.head('ovh.com').then(() => {
	console.error(`\n 🐈  It's up!`);
	process.exitCode = 1;
}).catch(() => {
	console.log(`\n🦄  It's down!`);
});
