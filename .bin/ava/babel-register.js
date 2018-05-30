require('@babel/register')({
	only: [
		'./.fixtures/{*,**/*}.js',
		'./as/{*,**/*}.next.js',
		'./has/{*,**/*}.next.js',
		'./internal/{*,**/*}.next.js',
		'./is/{*,**/*}.next.js',
		'./polyfill/{*,**/*}.next.js',
		'./shim/{*,**/*}.next.js',
		'./schema/{*,**/*}.next.js',
		'./index.next.js',
	],
});
