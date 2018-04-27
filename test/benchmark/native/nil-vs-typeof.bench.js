import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../fixtures/speed';
import * as datatypes from '../../fixtures/datatypes.fixture';

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

	.add('value == null', () => {
		value == null;
	})

	.add('value === null || value === undefined', () => {
		value === null || value === undefined;
	})

	.add('typeof value === object', () => {
		typeof value === 'object';
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
