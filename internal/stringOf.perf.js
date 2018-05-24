import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../.fixtures/benchmark';
import stringOf from './stringOf.next.js';

const value = /toString|stringOf/mig;

new Suite()

.add('toString', () => {
	toString(value);
})

.add('describeType.stringOf', () => {
	stringOf(value);
})

.add('describeType.stringOf(true)', () => {
	stringOf(value, true);
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
