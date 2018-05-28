import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as deprecatedIsType from '../.fixtures/obsoleto/is/type';
import * as describeType from '../index.next';
import * as is from './index.next';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: describeType.is.a(${name}, ${label})`, () => {
		is.type(ctor, value);
	})

	.add(`${name}: deprecated.is.a(${name}, ${label})`, () => {
		deprecatedIsType(ctor, value);
	})

	.add(`${name}: describeType.is.not.a(${name}, ${label})`, () => {
		describeType.is.not.type(ctor, value) === true;
	})

	.add(`${name}: Object.prototype.toString.call(${label}) === ${seal}`, () => {
		Object.prototype.toString.call(value) === seal;
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
