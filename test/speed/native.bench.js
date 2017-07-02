const { Suite } = require('benchmark');
const value = /foo/;

new Suite()

.add('typeof value:RegExp', () => {
	typeof value === 'object';
})

.add('value.constructor === RegExp', () => {
	value.constructor === RegExp;
})

.add('value.constructor.name', () => {
	value.constructor.name === 'RegExp';
})

.add('Object.prototype.toString.call(value:RegExp)', () => {
	Object.prototype.toString.call(value) === '[object RegExp]';
})

.add('value instanceof RegExp', () => {
	value instanceof RegExp;
})

.add('value.toString().replace(/^.*function\\s([^\\s]*|[^(]*)\\([^\x00]+/m, "$1").replace(/^\\s+|\\s$/g, "")', () => {
	value.constructor.toString().replace(/^.*function\s([^\s]*|[^(]*)\([^\x00]+/m, '$1').replace(/^\s+|\s$/g, '');
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\n\nFastest is ' + this.filter('fastest').map('name'));
})

.run({ async: true });
