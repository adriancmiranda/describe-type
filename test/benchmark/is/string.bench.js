const { Suite } = require('benchmark');
const { is } = require('../../../source');

new Suite()

.add('is.a(String, "foo")', () => {
	return is.a(String, 'foo');
})

.add('typeof "foo" === "string"', () => {
	return typeof 'foo' === 'string';
})

.add('toString.call("foo") === "[object String]"', () => {
	return Object.prototype.toString.call('foo') === '[object String]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
