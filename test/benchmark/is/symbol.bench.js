const { Suite } = require('benchmark');
const { is } = require('../../../source');

new Suite()

.add('is.a(Symbol, Symbol("foo"))', () => {
	return is(Symbol, Symbol('foo'));
})

.add('typeof Symbol("foo") === "symbol"', () => {
	return typeof Symbol('foo') === 'symbol';
})

.add('toString.call(Symbol("foo")) === "[object Symbol]"', () => {
	return Object.prototype.toString.call(Symbol('foo')) === '[object Symbol]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
