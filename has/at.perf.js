import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import { has } from './index.next';
import at from './at.next';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: at(${name}, () => ${label})`, () => {
		at(ctor, () => value);
	})

	.add(`${name}: describeType.has.at(${name}, () => ${label})`, () => {
		describeType.has.at(ctor, () => value);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
