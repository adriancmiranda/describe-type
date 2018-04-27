import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(null, null)', () => {
	is.a(null, null);
})

.add('null === null', () => {
	null === null;
})

.add('toString.call(null) === "[object Null]"', () => {
	Object.prototype.toString.call(null) === '[object Null]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
