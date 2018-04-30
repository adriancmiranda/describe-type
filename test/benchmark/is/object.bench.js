import { Suite } from 'benchmark';
import * as datatypes from '../../fixtures/datatypes.fixture';
import { benchmarkFatestStatus, benchmarkCycle } from '../../fixtures/speed';
import { objectToString } from '../../../source/internal/built-in';
import { type, object } from '../../../source/is';

function isAny(expected, value) {
	return new RegExp(`(${expected})`).test(Object.prototype.toString.call(value));
}

function isType(expected, value) {
	return objectToString.call(value) === `[object ${expected}]`;
}

let i = 0;
datatypes.object.add(datatypes.objectEvil);
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
		type(ctor, value);
	})

	.add(`describeType.is.object(${label})`, () => {
		object(value);
	})

	.add(`isAny("Object", ${label})`, () => {
		isAny('Object', value);
	})

	.add(`isType("Object", ${label})`, () => {
		isType('Object', value);
	})

	.add(`isA(Object, ${label})`, () => {
		isA(ctor, value);
	})

	.add(`toString.call(${label}) === ${seal}`, () => {
		objectToString.call(value) === seal;
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/))

	.run({ async: false });
});
