import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import * as datatypes from '../../fixtures/datatypes.fixture';
import { objectToString } from '../../../source/@/built-in.js';
import getPrototypeOf from '../../../source/@/getPrototypeOf.js';

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
		return is.a(Boolean, true);
	})

	.add(`describeType.is.bool(${label})`, () => {
		return is.bool(true);
	})

	.add(`typeof ${label} === "boolean"`, () => {
		return typeof value === 'boolean';
	})

	.add(`${label} instanceof ${name}`, () => {
		return value instanceof ctor;
	})

	.add(`toString.call(${label}) === "${seal}"`, () => {
		return Object.prototype.toString.call(value) === seal;
	})

	.on('cycle', ({ target }) => {
		console.log(String(target));
	})

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
