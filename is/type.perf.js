import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
// import * as deprecatedIs from '../.fixtures/deprecated/is';
import * as describeType from '../index.next';
import * as is from './index.next';
import type from './type.next';

let i = 0;
datatypes.all.iterate((datatype) => {
	const name = datatype.name;
	const seal = datatype.seal;
	const label = datatype.label;
	const ctor = datatype.ctor;
	const value = datatype.value;
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: type(${name}, ${label})`, () => {
		type(ctor, value);
	})

	.add(`${name}: is.type(${name}, ${label})`, () => {
		is.type(ctor, value);
	})

	.add(`${name}: describeType.is.type(${name}, ${label})`, () => {
		describeType.is.type(ctor, value);
	})

	// .add(`${name}: deprecated.is.a(${name}, ${label})`, () => {
	// 	deprecatedIs.a(ctor, value);
	// })

	// .add(`${name}: describeType.is.not.a(${name}, ${label})`, () => {
	// 	is.not.type(ctor, value) === true;
	// })

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
