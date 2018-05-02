import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../.fixtures/benchmark';
import apply from '../../../internal/apply';

const value = '~ apply ~'.split('');
const fn = args => args[Math.max(0, args.length - 1)];

new Suite()

.add('fn.apply', () => {
	fn.apply(this, value);
})

.add('describeType.internal.apply(fn)', () => {
	apply(fn, this, value);
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
