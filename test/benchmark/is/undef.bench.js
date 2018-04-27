import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.an(undefined, undefined)', () => {
	is.an(undefined, undefined);
})

.add('typeof undefined === "undefined"', () => {
	typeof undefined === 'undefined';
})

.add('undefined === undefined', () => {
	undefined === undefined;
})

.add('toString.call(undefined) === "[object Undefined]"', () => {
	Object.prototype.toString.call(undefined) === '[object Undefined]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
