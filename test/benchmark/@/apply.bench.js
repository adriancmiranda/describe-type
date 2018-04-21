import { Suite } from 'benchmark';
import apply from '../../../source/@/apply.js';

const value = '~ apply ~'.split('');
const fn = args => args[Math.max(0, args.length - 1)];

new Suite()

.add('fn.apply', () => {
	fn.apply(this, value);
})

.add('describeType.internal.apply(fn)', () => {
	apply(fn, this, value);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
