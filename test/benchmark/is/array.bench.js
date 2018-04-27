import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.an(Array, ["str", 1, { foo: "bar" }])', () => {
	return is.an(Array, ['str', 1, { foo: 'bar' }]);
})

.add('describeType.is.array(["str", 1, { foo: "bar" }])', () => {
	return is.array(['str', 1, { foo: 'bar' }]);
})

.add('["str", 1, { foo: "bar" }] instanceof Array', () => {
	return ['str', 1, { foo: 'bar' }] instanceof Array;
})

.add('Array.isArray(["str", 1, { foo: "bar" }])', () => {
	return Array.isArray(['str', 1, { foo: 'bar' }]);
})

.add('toString.call(["str", 1, { foo: "bar" }]) === "[object Array]"', () => {
	return Object.prototype.toString.call(['str', 1, { foo: 'bar' }]) === '[object Array]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
