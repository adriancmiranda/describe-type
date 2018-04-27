import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../fixtures/speed';
import * as datatypes from '../../fixtures/datatypes.fixture';
import { objectToString, objectHasOwnProperty } from '../../../source/@/built-in.js';
import getPrototypeOf from '../../../source/@/getPrototypeOf.js';

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

	.add(`${label}.prototype === getPrototypeOf(${label})`, () => {
		value.prototype === getPrototypeOf(value);
	})

	.add(`getPrototypeOf(${label}).constructor === ${name}`, () => {
		getPrototypeOf(value).constructor === ctor;
	})

	.add(`objectToString.call(${label}) === ${seal}`, () => {
		objectToString.call(value) === seal;
	})

	.add(`${label}.prototype === ${label}.__proto__`, () => {
		value.prototype === value.__proto__;
	})

	.add(`${label}.constructor === ${label}.__proto__.constructor`, () => {
		value.constructor === value.__proto__.constructor;
	})

	.add(`objectHasOwnProperty(${label}, 'constructor')`, () => {
		objectHasOwnProperty.call(value, 'constructor');
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
