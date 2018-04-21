const { Suite } = require('benchmark');
const { is } = require('../../../source');

new Suite()

.add('describeType.is.an(Object, Object.create(null))', () => {
	return is.an(Object, Object.create(null));
})

.add('typeof Object.create(null) === "object"', () => {
	return typeof Object.create(null) === 'object';
})

.add('toString.call(object.create(null)) === "[object Object]"', () => {
	return Object.prototype.toString.call(Object.create(null)) === '[object Object]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
