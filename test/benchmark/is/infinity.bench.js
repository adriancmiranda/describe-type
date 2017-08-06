const { Suite } = require('benchmark');
const { is } = require('../../../source/modules');

new Suite()

.add('is.not.infinity', () => {
	return is.not.infinity(Infinity);
})

.add('is.infinity', () => {
	return is.infinity(Infinity);
})

.add('Infinity !== Infinity', () => {
	return Infinity !== Infinity;
})

.add('Infinity === Infinity', () => {
	return Infinity === Infinity;
})

.add('isFinite', () => {
	return isFinite(Infinity);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
