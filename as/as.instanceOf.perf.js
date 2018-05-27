import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import { as } from '../index.next';
import asInstanceOf from './as.instanceOf.next';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: asInstanceOf(${name}, () => ${label})`, () => {
		asInstanceOf(ctor, () => value);
	})

	.add(`${name}: asInstanceOf(${name}, ${label})`, () => {
		asInstanceOf(ctor, value);
	})

	.add(`${name}: as.instanceOf(${name}, () => ${label})`, () => {
		as.instanceOf(ctor, () => value);
	})

	.add(`${name}: as.instanceOf(${name}, ${label})`, () => {
		as.instanceOf(ctor, value);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
