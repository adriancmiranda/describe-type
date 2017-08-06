const { Suite } = require('benchmark');
const { is } = require('../../../source/modules');

new Suite()

.add('is.a(null, null)', () => {
	return is.a(null, null);
})

.add('null === null', () => {
	return null === null;
})

.add('toString.call(null) === "[object Null]"', () => {
	return Object.prototype.toString.call(null) === '[object Null]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
