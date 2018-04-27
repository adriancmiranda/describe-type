import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
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

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
