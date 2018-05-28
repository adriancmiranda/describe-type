import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { is } from '../index.next';

new Suite()

.add('describeType.is.a(Function, () => {})', () => {
	is.a(Function, () => {});
})

.add('typeof (() => {}) === "function"', () => {
	typeof (() => {}) === 'function';
})

.add('toString.call(() => {}) === "[object Function]"', () => {
	Object.prototype.toString.call(() => {}) === '[object Function]';
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
