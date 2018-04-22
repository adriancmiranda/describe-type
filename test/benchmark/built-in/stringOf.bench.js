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

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
