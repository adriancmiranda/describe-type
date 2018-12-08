import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import * as internal from './index.next';
import arrayOf from './arrayOf.next';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: arrayOf(${label})`, () => {
		arrayOf(value);
	})

	.add(`${name}: internal.arrayOf(${label})`, () => {
		internal.arrayOf(value);
	})

	.add(`${name}: describeType.arrayOf(${label})`, () => {
		describeType.arrayOf(value);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
