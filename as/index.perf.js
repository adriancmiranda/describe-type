import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import { as } from './index.next';
import asA from './as.a.next';
import asAn from './as.an.next';
import asAny from './as.any.next';
import asType from './as.type.next';
import asInstanceOf from './as.instanceOf.next';
import asArrayOf from './as.arrayOf.next';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: asA(${name}, () => ${label})`, () => {
		asA(ctor, () => value);
	})

	.add(`${name}: asA(${name}, ${label})`, () => {
		asA(ctor, value);
	})

	.add(`${name}: asAn(${name}, () => ${label})`, () => {
		asAn(ctor, () => value);
	})

	.add(`${name}: asAn(${name}, ${label})`, () => {
		asAn(ctor, value);
	})

	.add(`${name}: asAny(${name}, () => ${label})`, () => {
		asAny(ctor, () => value);
	})

	.add(`${name}: asAny(${name}, ${label})`, () => {
		asAny(ctor, value);
	})

	.add(`${name}: asInstanceOf(${name}, () => ${label})`, () => {
		asInstanceOf(ctor, () => value);
	})

	.add(`${name}: asInstanceOf(${name}, ${label})`, () => {
		asInstanceOf(ctor, value);
	})

	.add(`${name}: asType(${name}, () => ${label})`, () => {
		asType(ctor, () => value);
	})

	.add(`${name}: asType(${name}, ${label})`, () => {
		asType(ctor, value);
	})

	.add(`${name}: asArrayOf(${name}, () => ${label})`, () => {
		asArrayOf(ctor, () => value);
	})

	.add(`${name}: asArrayOf(${name}, ${label})`, () => {
		asArrayOf(ctor, value);
	})

	.add(`${name}: as.a(${name}, () => ${label})`, () => {
		as.a(ctor, () => value);
	})

	.add(`${name}: as.a(${name}, ${label})`, () => {
		as.a(ctor, value);
	})

	.add(`${name}: as.an(${name}, () => ${label})`, () => {
		as.an(ctor, () => value);
	})

	.add(`${name}: as.an(${name}, ${label})`, () => {
		as.an(ctor, value);
	})

	.add(`${name}: as.any(${name}, () => ${label})`, () => {
		as.any(ctor, () => value);
	})

	.add(`${name}: as.any(${name}, ${label})`, () => {
		as.any(ctor, value);
	})

	.add(`${name}: as.instanceOf(${name}, () => ${label})`, () => {
		as.instanceOf(ctor, () => value);
	})

	.add(`${name}: as.instanceOf(${name}, ${label})`, () => {
		as.instanceOf(ctor, value);
	})

	.add(`${name}: as.type(${name}, () => ${label})`, () => {
		as.type(ctor, () => value);
	})

	.add(`${name}: as.type(${name}, ${label})`, () => {
		as.type(ctor, value);
	})

	.add(`${name}: as.arrayOf(${name}, () => ${label})`, () => {
		as.arrayOf(ctor, () => value);
	})

	.add(`${name}: as.arrayOf(${name}, ${label})`, () => {
		as.arrayOf(ctor, value);
	})

	.add(`${name}: describeType.as.a(${name}, () => ${label})`, () => {
		describeType.as.a(ctor, () => value);
	})

	.add(`${name}: describeType.as.a(${name}, ${label})`, () => {
		describeType.as.a(ctor, value);
	})

	.add(`${name}: describeType.as.an(${name}, () => ${label})`, () => {
		describeType.as.an(ctor, () => value);
	})

	.add(`${name}: describeType.as.an(${name}, ${label})`, () => {
		describeType.as.an(ctor, value);
	})

	.add(`${name}: describeType.as.any(${name}, () => ${label})`, () => {
		describeType.as.any(ctor, () => value);
	})

	.add(`${name}: describeType.as.any(${name}, ${label})`, () => {
		describeType.as.any(ctor, value);
	})

	.add(`${name}: describeType.as.instanceOf(${name}, () => ${label})`, () => {
		describeType.as.instanceOf(ctor, () => value);
	})

	.add(`${name}: describeType.as.instanceOf(${name}, ${label})`, () => {
		describeType.as.instanceOf(ctor, value);
	})

	.add(`${name}: describeType.as.type(${name}, () => ${label})`, () => {
		describeType.as.type(ctor, () => value);
	})

	.add(`${name}: describeType.as.type(${name}, ${label})`, () => {
		describeType.as.type(ctor, value);
	})

	.add(`${name}: describeType.as.arrayOf(${name}, () => ${label})`, () => {
		describeType.as.arrayOf(ctor, () => value);
	})

	.add(`${name}: describeType.as.arrayOf(${name}, ${label})`, () => {
		describeType.as.arrayOf(ctor, value);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
