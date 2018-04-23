import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
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

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
