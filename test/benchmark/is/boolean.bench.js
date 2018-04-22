import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(Boolean, true)', () => {
	return is.a(Boolean, true);
})

.add('describeType.is.bool(true)', () => {
	return is.bool(true);
})

.add('typeof true === "boolean"', () => {
	return typeof true === 'boolean';
})

.add('toString.call(true) === "[object Boolean]"', () => {
	return Object.prototype.toString.call(true) === '[object Boolean]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: true });
