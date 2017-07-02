const { Suite } = require('benchmark');
const value = /foo/;

new Suite()

.add('typeof value:RegExp', () => {
	typeof value === 'object';
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

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\n\nFastest is ' + this.filter('fastest').map('name'));
})

.run({ async: true });
