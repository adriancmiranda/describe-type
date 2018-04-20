require('babel-polyfill');
require('babel-register')({
	babelrc: false,
	ignore: ['node_modules/*', 'test/*'],
	presets: [
		['env'],
		['flow'],
	],
});
