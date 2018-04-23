import chalk from 'chalk';
import { Suite } from 'benchmark';
import stringOf from '../../../source/built-in/stringOf.js';

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

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
