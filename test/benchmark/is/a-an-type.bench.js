import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import * as datatypes from '../../fixtures/datatypes.fixture';
import * as deprecatedIs from '../../fixtures/deprecated/is';
import * as is from '../../../source/is';

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

	.add(`${name}: describeType.is.a(${name}, ${label})`, () => {
		return is.type(ctor, value);
	})

	.add(`${name}: deprecated.is.a(${name}, ${label})`, () => {
		return deprecatedIs.a(ctor, value);
	})

	.add(`${name}: describeType.is.not.a(${name}, ${label})`, () => {
		return is.not.type(ctor, value) === true;
	})

	.add(`${name}: Object.prototype.toString.call(${label}) === ${seal}`, () => {
		return Object.prototype.toString.call(value) === seal;
	})

	.on('cycle', (evt) => {
		console.log(String(evt.target));
	})

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
