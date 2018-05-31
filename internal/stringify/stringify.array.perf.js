import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../.fixtures/benchmark';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as describeType from '../../index.next';
import stringify from './stringify.next';
import stringifyArray from './stringify.array.next';
import index from './index.next';

let i = 0;
datatypes.array.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: describeType.stringify.array(${label})`, () => {
		describeType.stringify.array(value);
	})

	.add(`${name}: stringify.array(${label})`, () => {
		stringify.array(value);
	})

	.add(`${name}: stringifyArray(${label})`, () => {
		stringifyArray(value);
	})

	.add(`${name}: index(${label})`, () => {
		index(value);
	})

	.add(`${name}: JSON.stringify(${label})`, () => {
		JSON.stringify(value);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/JSON\.stringify/, progress, loaded, total))

	.run({ async: false });
});
