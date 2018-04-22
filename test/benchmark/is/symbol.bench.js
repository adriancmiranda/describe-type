import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/colors';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(Symbol, Symbol("foo"))', () => {
	return is(Symbol, Symbol('foo'));
})

.add('typeof Symbol("foo") === "symbol"', () => {
	return typeof Symbol('foo') === 'symbol';
})

.add('toString.call(Symbol("foo")) === "[object Symbol]"', () => {
	return Object.prototype.toString.call(Symbol('foo')) === '[object Symbol]';
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
