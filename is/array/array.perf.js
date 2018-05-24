import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../.fixtures/benchmark';
import * as is from './index.next';

new Suite()

.add('describeType.is.an(Array, ["str", 1, { foo: "bar" }])', () => {
	is.an(Array, ['str', 1, { foo: 'bar' }]);
})

.add('describeType.is.array(["str", 1, { foo: "bar" }])', () => {
	is.array(['str', 1, { foo: 'bar' }]);
})

.add('["str", 1, { foo: "bar" }] instanceof Array', () => {
	['str', 1, { foo: 'bar' }] instanceof Array;
})

.add('Array.isArray(["str", 1, { foo: "bar" }])', () => {
	Array.isArray(['str', 1, { foo: 'bar' }]);
})

.add('toString.call(["str", 1, { foo: "bar" }]) === "[object Array]"', () => {
	Object.prototype.toString.call(['str', 1, { foo: 'bar' }]) === '[object Array]';
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
