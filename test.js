import test from 'ava';
import execa from 'execa';

test('cli', async t => {
	let ret;

	try {
		ret = await execa('./cli.js');
	} catch (error) {
		ret = error.stderr;
	}

	t.regex(ret, /down|up/);
});
