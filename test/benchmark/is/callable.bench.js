import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../fixtures/speed';
import { is } from '../../../source';

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
