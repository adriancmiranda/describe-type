const { Suite } = require('benchmark');
const { is } = require('../../../source');

new Suite()

.add('is.a(Boolean, true)', () => {
	return is.a(Boolean, true);
})

.add('is.bool(true)', () => {
	return is.bool(true);
})

.add('typeof true === "boolean"', () => {
	return typeof true === 'boolean';
})

.add('toString.call(true) === "[object Boolean]"', () => {
	return Object.prototype.toString.call(true) === '[object Boolean]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
