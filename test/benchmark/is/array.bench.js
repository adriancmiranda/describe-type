const { Suite } = require('benchmark');
const { is } = require('../../../source/modules');

new Suite()

.add('is.an(Array, ["str", 1, { foo: "bar" }])', () => {
	return is.an(Array, ['str', 1, { foo: 'bar' }]);
})

.add('is.array(["str", 1, { foo: "bar" }])', () => {
	return is.array(['str', 1, { foo: 'bar' }]);
})

.add('Array.isArray(["str", 1, { foo: "bar" }])', () => {
	return Array.isArray(['str', 1, { foo: 'bar' }]);
})

.add('toString.call(["str", 1, { foo: "bar" }]) === "[object Array]"', () => {
	return Object.prototype.toString.call(['str', 1, { foo: 'bar' }]) === '[object Array]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
