const { Suite } = require('benchmark');
const { is } = require('../../../source');

new Suite()

.add('describeType.is.a(Number, 1)', () => {
	return is.a(Number, 1);
})

.add('typeof 1 === "number"', () => {
	return typeof 1 === 'number';
})

.add('toString.call(1) === "[object Number]"', () => {
	return Object.prototype.toString.call(1) === '[object Number]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
