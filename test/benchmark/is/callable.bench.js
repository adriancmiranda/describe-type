const { Suite } = require('benchmark');
const { is } = require('../../../source');

new Suite()

.add('describeType.is.a(Function, () => {})', () => {
	return is.a(Function, () => {});
})

.add('typeof (() => {}) === "function"', () => {
	return typeof (() => {}) === 'function';
})

.add('toString.call(() => {}) === "[object Function]"', () => {
	return Object.prototype.toString.call(() => {}) === '[object Function]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
