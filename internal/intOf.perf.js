import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import intOf from './intOf.next';

const value = [
	{ value: '0xfff', radix: 16 },
	{ value: 10.4, radix: 10 },
	{ value: Math.PI, radix: 10 },
	{ value: Math.SQRT2 },
	{ value: Math.E },
];

new Suite()

.add('parseInt', () => {
	value.map(i => parseInt(i.value, i.radix));
})

.add('describeType.intOf', () => {
	value.map(i => intOf(i.value, i.radix));
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
