import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../fixtures/speed';
import * as datatypes from '../../fixtures/datatypes.fixture';
import { objectToString } from '../../../source/internal/built-in';

let i = 0;
datatypes.bool.iterate((datatype) => {
	const name = datatype.name;
	const seal = datatype.seal;
	const label = datatype.label;
	const ctor = datatype.ctor;
	const value = datatype.value;
	const loaded = ++i;
	const total = datatypes.bool.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`describeType.is.a(Boolean, true)`, () => {
		is.a(Boolean, true);
	})

	.add(`describeType.is.bool(${label})`, () => {
		is.bool(true);
	})

	.add(`typeof ${label} === "boolean"`, () => {
		typeof value === 'boolean';
	})

	.add(`${label} instanceof ${name}`, () => {
		value instanceof ctor;
	})

	.add(`toString.call(${label}) === "${seal}"`, () => {
		objectToString.call(value) === seal;
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
