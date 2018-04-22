import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/colors';
import { is } from '../../../source';

new Suite()

.add('describeType.is.an(undefined, undefined)', () => {
	return is.an(undefined, undefined);
})

.add('typeof undefined === "undefined"', () => {
	return typeof undefined === 'undefined';
})

.add('undefined === undefined', () => {
	return undefined === undefined;
})

.add('toString.call(undefined) === "[object Undefined]"', () => {
	return Object.prototype.toString.call(undefined) === '[object Undefined]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function onComplete() {
	const fastest = this.filter('fastest').map('name');
	const color = benchmarkFatestStatus(fastest, /toString/);
	console.log(`\nFastest is:\n${color(fastest.join('\n'))}`);
})

.run({ async: true });
