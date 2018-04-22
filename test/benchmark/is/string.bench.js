import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(String, "foo")', () => {
	return is.a(String, 'foo');
})

.add('typeof "foo" === "string"', () => {
	return typeof 'foo' === 'string';
})

.add('toString.call("foo") === "[object String]"', () => {
	return Object.prototype.toString.call('foo') === '[object String]';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: true });
