import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/colors';
import { is } from '../../../source';

function integer(value) {
	return parseFloat(value) === parseInt(value, 10);
}

new Suite()

.add('integer', () => {
	return integer(Infinity);
})

.add('describeType.is.integer', () => {
	return is.integer(Infinity);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	console.log('\nFastest is', this.filter('fastest').map('name'));
})

.run({ async: true });
