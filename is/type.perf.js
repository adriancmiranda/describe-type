import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as deprecatedIsType from '../.fixtures/obsoleto/is/type.next';
import * as describeType from '../index.next';
import * as is from './index';
import typeNext from './type.next';
import type from './type';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: type(${name}, ${label})`, () => {
		type(ctor, value);
	})

	.add(`${name}: typeNext(${name}, ${label})`, () => {
		typeNext(ctor, value);
	})

	.add(`${name}: is.type(${name}, ${label})`, () => {
		is.type(ctor, value);
	})

	.add(`${name}: describeType.is.type(${name}, ${label})`, () => {
		describeType.is.type(ctor, value);
	})

	.add(`${name}: deprecated.is.type(${name}, ${label})`, () => {
		deprecatedIsType(ctor, value);
	})

	.add(`${name}: toString.call(${label}) === ${seal}`, () => {
		toString.call(value) === seal;
	})

	.add(`${name}: Object.prototype.toString.call(${label}) === ${seal}`, () => {
		Object.prototype.toString.call(value) === seal;
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
