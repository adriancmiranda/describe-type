import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
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

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
