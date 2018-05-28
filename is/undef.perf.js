import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { is } from '../index.next';

new Suite()

.add('describeType.is.an(undefined, undefined)', () => {
	is.an(undefined, undefined);
})

.add('typeof undefined === "undefined"', () => {
	typeof undefined === 'undefined';
})

.add('undefined === undefined', () => {
	undefined === undefined;
})

.add('toString.call(undefined) === "[object Undefined]"', () => {
	Object.prototype.toString.call(undefined) === '[object Undefined]';
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
