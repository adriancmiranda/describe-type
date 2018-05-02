import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark/index.js';
import * as datatypes from '../.fixtures/datatypes.fixture.js';
import deprecatedAsAny from '../.fixtures/deprecated/as/as.any.js';
import asAny from './as.any.next.js';

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

	.add(`${name}: as(${name}, () => ${label})`, () => {
		asAny(ctor, () => value);
	})

	.add(`${name}: deprecated.as(${name}, () => ${label})`, () => {
		deprecatedAsAny(ctor, () => value);
	})

	.add(`${name}: as(${name}, ${label})`, () => {
		asAny(ctor, value);
	})

	.add(`${name}: deprecated.as(${name}, ${label})`, () => {
		deprecatedAsAny(ctor, value);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
