import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../.fixtures/benchmark';
import { is } from '../../..';

new Suite()

.add('describeType.is.a(String, "foo")', () => {
	is.a(String, 'foo');
})

.add('typeof "foo" === "string"', () => {
	typeof 'foo' === 'string';
})

.add('toString.call("foo") === "[object String]"', () => {
	Object.prototype.toString.call('foo') === '[object String]';
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
