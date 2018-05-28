import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { is } from '../index.next';

new Suite()

.add('describeType.is.not.infinity', () => {
	is.not.infinity(Infinity);
})

.add('describeType.is.infinity', () => {
	is.infinity(Infinity);
})

.add('Infinity !== Infinity', () => {
	Infinity !== Infinity;
})

.add('Infinity === Infinity', () => {
	Infinity === Infinity;
})

.add('isFinite', () => {
	isFinite(Infinity);
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
