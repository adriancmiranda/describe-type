import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.not.infinity', () => {
	return is.not.infinity(Infinity);
})

.add('describeType.is.infinity', () => {
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

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
