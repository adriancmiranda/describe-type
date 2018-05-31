import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../.fixtures/benchmark';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as describeType from '../../index.next';
import stringify from './stringify.next';
import index from './index.next';

let i = 0;
datatypes.object.add(datatypes.array);
datatypes.object.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: describeType.stringify(${label})`, () => {
		describeType.stringify(value);
	})

	.add(`${name}: stringify(${label})`, () => {
		stringify(value);
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
datatypes.object.remove(datatypes.array);
