require('babel-polyfill');
require('babel-register')({
	cache: true,
	babelrc: false,
	only: ['source/*', 'test/fixtures/*', 'test/unit/*'],
	presets: [
		['env'],
		['flow'],
	],
});
