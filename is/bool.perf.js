import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { is } from '../../..';

new Suite()

.add('describeType.is.a(Boolean, true)', () => {
	is.a(Boolean, true);
})

.add('describeType.is.bool(true)', () => {
	is.bool(true);
})

.add('typeof true === "boolean"', () => {
	typeof true === 'boolean';
})

.add('toString.call(true) === "[object Boolean]"', () => {
	Object.prototype.toString.call(true) === '[object Boolean]';
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
