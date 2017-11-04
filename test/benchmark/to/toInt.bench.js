import { Suite } from 'benchmark';
import toInt from '../../../source/to/toInt.js';

const value = ['0xfff', 10.4, Math.PI];

const cachedKeys = Object.keys;

new Suite()

.add('parseInt', () => {
	value.map(parseInt);
})

.add('toInt', () => {
	value.map(toInt);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
