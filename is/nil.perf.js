import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { is } from '../../..';

new Suite()

.add('describeType.is.a(null, null)', () => {
	is.a(null, null);
})

.add('null === null', () => {
	null === null;
})

.add('toString.call(null) === "[object Null]"', () => {
	Object.prototype.toString.call(null) === '[object Null]';
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
