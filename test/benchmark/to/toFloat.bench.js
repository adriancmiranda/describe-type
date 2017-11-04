import { Suite } from 'benchmark';
import toFloat from '../../../source/to/toFloat.js';

const value = ['0xfff', '10.4', '0.4f', Math.PI];

const cachedKeys = Object.keys;

new Suite()

.add('parseFloat', () => {
	value.map(parseFloat);
})

.add('toFloat', () => {
	value.map(toFloat);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
