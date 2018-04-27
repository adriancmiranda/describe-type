import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import floatOf from '../../../source/built-in/floatOf.js';

const value = ['0xfff', '10.4', '0.4f', Math.PI];

new Suite()

.add('parseFloat', () => {
	value.map(parseFloat);
})

.add('describeType.floatOf', () => {
	value.map(floatOf);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
