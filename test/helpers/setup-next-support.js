require('babel-polyfill');
require('babel-register')({
	babelrc: false,
	only: ['source/*', 'test/fixtures/*', 'test/unit/**/index.js'],
	presets: [
		['env'],
		['flow'],
	],
});
