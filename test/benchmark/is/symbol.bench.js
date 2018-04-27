import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(Symbol, Symbol("foo"))', () => {
	is(Symbol, Symbol('foo'));
})

.add('typeof Symbol("foo") === "symbol"', () => {
	typeof Symbol('foo') === 'symbol';
})

.add('toString.call(Symbol("foo")) === "[object Symbol]"', () => {
	Object.prototype.toString.call(Symbol('foo')) === '[object Symbol]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
