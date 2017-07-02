/* eslint-disable no-unused-expressions */
const { Suite } = require('benchmark');
const value = /foo/;

new Suite()

.add('typeof value:RegExp', () => {
	typeof value === 'regexp';
})

.add('value.constructor === RegExp', () => {
		value.constructor === RegExp;
})

.add('Object.prototype.toString.call(value:RegExp)', () => {
	Object.prototype.toString.call(value) === '[object RegExp]';
})

.add('value instanceof RegExp', () => {
	value instanceof RegExp;
})

.on('cycle', (event) => {
	console.log(String(event.target));
})

.on('complete', function () {
	console.log('\n\nFastest is ' + this.filter('fastest').map('name'));
})

.run({ async: true });
