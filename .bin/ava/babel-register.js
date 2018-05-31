require('@babel/register')({
	only: [
		'./.fixtures/{*,**/*}.js',
		'./as/{*,**/*}.next.js',
		'./has/{*,**/*}.next.js',
		'./internal/{*,**/*}.next.js',
		'./is/{*,**/*}.next.js',
		'./ponyfill/{*,**/*}.next.js',
		'./shim/{*,**/*}.next.js',
		'./schema/{*,**/*}.next.js',
		'./index.next.js',
	],
});
