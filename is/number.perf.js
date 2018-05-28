import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { is } from '../index.next';

new Suite()

.add('describeType.is.a(Number, 1)', () => {
	is.a(Number, 1);
})

.add('typeof 1 === "number"', () => {
	typeof 1 === 'number';
})

.add('toString.call(1) === "[object Number]"', () => {
	Object.prototype.toString.call(1) === '[object Number]';
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
