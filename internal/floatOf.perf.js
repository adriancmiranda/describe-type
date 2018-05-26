import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import floatOf from './floatOf.next';

const value = ['0xfff', '10.4', '0.4f', Math.PI];

new Suite()

.add('parseFloat', () => {
	value.map(parseFloat);
})

.add('describeType.floatOf', () => {
	value.map(floatOf);
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
