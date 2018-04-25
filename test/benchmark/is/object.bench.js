import chalk from 'chalk';
import { Suite } from 'benchmark';
import * as datatypes from '../../fixtures/datatypes.fixture';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { objectToString } from '../../../source/@/built-in';
import getPrototypeOf from '../../../source/@/getPrototypeOf';
import { type, object } from '../../../source/is';

function isAny(expected, value) {
	return new RegExp(`(${expected})`).test(Object.prototype.toString.call(value));
}

function isType(expected, value) {
	return objectToString.call(value) === `[object ${expected}]`;
}

let i = 0;
datatypes.object.iterate((datatype) => {
	const name = datatype.name;
	const seal = datatype.seal;
	const label = datatype.label;
	const ctor = datatype.ctor;
	const value = datatype.value;
	const loaded = ++i;
	const total = datatypes.object.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`describeType.is.an(Object, ${label})`, () => {
		try{
			type(ctor, value);
		} catch(e){console.log(e)};
	})

	.add(`describeType.is.object(${label})`, () => {
		return object(value);
	})

	.add(`isAny("Object", ${label})`, () => {
		return isAny('Object', value);
	})

	.add(`isType("Object", ${label})`, () => {
		return isType('Object', value);
	})

	.add(`isA(Object, ${label})`, () => {
		return isA(ctor, value);
	})

	.add(`toString.call(${label}) === ${seal}`, () => {
		return objectToString.call(value) === seal;
	})

	.on('cycle', ({ target }) => {
		console.log(String(target));
	})

	.on('complete', benchmarkFatestStatus(/toString/))

	.run({ async: false });
});
