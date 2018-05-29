import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import * as internal from './index.next';
import booleanOf from './booleanOf.next';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: booleanOf(${label})`, () => {
		booleanOf(value);
	})

	.add(`${name}: internal.booleanOf(${label})`, () => {
		internal.booleanOf(value);
	})

	.add(`${name}: describeType.booleanOf(${label})`, () => {
		describeType.booleanOf(value);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
