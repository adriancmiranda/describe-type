import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { all } from '../../.fixtures/datatypes.fixture';
import { is } from '../../..';

let i = 0;
all.iterate((datatype) => {
	const name = datatype.name;
	const seal = datatype.seal;
	const label = datatype.label;
	const ctor = datatype.ctor;
	const value = datatype.value;
	const loaded = ++i;
	const total = all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`describeType.is.any(${name}, ${label})`, () => {
		is.any(ctor, value);
	})

	.add(`describeType.is.not.any(${name}, ${label})`, () => {
		is.not.any(ctor, value) === true;
	})

	.add(`Object.prototype.toString.call(${label}) === ${seal}`, () => {
		Object.prototype.toString.call(value) === seal;
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/))

	.run({ async: false });
});
