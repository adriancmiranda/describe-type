import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(Boolean, true)', () => {
	is.a(Boolean, true);
})

.add('describeType.is.bool(true)', () => {
	is.bool(true);
})

.add('typeof true === "boolean"', () => {
	typeof true === 'boolean';
})

.add('toString.call(true) === "[object Boolean]"', () => {
	Object.prototype.toString.call(true) === '[object Boolean]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
