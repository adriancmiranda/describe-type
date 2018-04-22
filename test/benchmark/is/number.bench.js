import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/colors';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(Number, 1)', () => {
	return is.a(Number, 1);
})

.add('typeof 1 === "number"', () => {
	return typeof 1 === 'number';
})

.add('toString.call(1) === "[object Number]"', () => {
	return Object.prototype.toString.call(1) === '[object Number]';
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
