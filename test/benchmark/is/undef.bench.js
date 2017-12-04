const { Suite } = require('benchmark');
const { is } = require('../../../source');

new Suite()

.add('is.an(undefined, undefined)', () => {
	return is.an(undefined, undefined);
})

.add('typeof undefined === "undefined"', () => {
	return typeof undefined === 'undefined';
})

.add('undefined === undefined', () => {
	return undefined === undefined;
})

.add('toString.call(undefined) === "[object Undefined]"', () => {
	return Object.prototype.toString.call(undefined) === '[object Undefined]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
