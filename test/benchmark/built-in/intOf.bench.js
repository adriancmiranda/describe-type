import { Suite } from 'benchmark';
import intOf from '../../../source/built-in/intOf.js';

const value = ['0xfff', 10.4, Math.PI];

const cachedKeys = Object.keys;

new Suite()

.add('parseInt', () => {
	value.map(parseInt);
})

.add('intOf', () => {
	value.map(intOf);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
