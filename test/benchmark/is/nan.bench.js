const { Suite } = require('benchmark');
const { is } = require('../../../source/modules');

new Suite()

.add('is.not.numeric', () => {
	return is.not.numeric(NaN);
})

.add('isNan', () => {
	return isNaN(NaN);
})

.add('NaN !== NaN', () => {
	return NaN !== NaN;
})

.add('NaN === NaN', () => {
	return NaN === NaN;
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
