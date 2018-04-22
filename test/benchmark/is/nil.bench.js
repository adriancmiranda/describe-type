import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(null, null)', () => {
	return is.a(null, null);
})

.add('null === null', () => {
	return null === null;
})

.add('toString.call(null) === "[object Null]"', () => {
	return Object.prototype.toString.call(null) === '[object Null]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: true });
