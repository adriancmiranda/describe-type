import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.an(Object, Object.create(null))', () => {
	return is.an(Object, Object.create(null));
})

.add('typeof Object.create(null) === "object"', () => {
	return typeof Object.create(null) === 'object';
})

.add('toString.call(object.create(null)) === "[object Object]"', () => {
	return Object.prototype.toString.call(Object.create(null)) === '[object Object]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
