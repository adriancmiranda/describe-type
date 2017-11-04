import { Suite } from 'benchmark';
import describeTypeToString from '../../../source/to/toString.js';

const value = /toString|benchmark/mig;

const cachedKeys = Object.keys;

new Suite()

.add('toString', () => {
	toString(value);
})

.add('describeType.toString', () => {
	describeTypeToString(value);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
