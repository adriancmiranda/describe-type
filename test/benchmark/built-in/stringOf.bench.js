import { Suite } from 'benchmark';
import stringOf from '../../../source/built-in/stringOf.js';

const value = /toString|stringOf/mig;

const cachedKeys = Object.keys;

new Suite()

.add('toString', () => {
	toString(value);
})

.add('describeType.stringOf', () => {
	stringOf(value);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
