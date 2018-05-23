require('@babel/register')({
	only: [
		'./as/{*,**/*}.next.js',
		'./has/{*,**/*}.next.js',
		'./internal/{*,**/*}.next.js',
		'./is/{*,**/*}.next.js',
		'./polyfill/{*,**/*}.next.js',
		'./schema/{*,**/*}.next.js',
		'./index.next.js',
	],
});
