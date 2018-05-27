import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from './index.next';

let i = 0;
datatypes.all.iterate(({ name, seal, label, ctor, value }) => {
	const loaded = ++i;
	const total = datatypes.all.size();
	const progress = Math.round((loaded / total) * 100);

	new Suite()

	.add(`${name}: describeType.is.type(${name}, ${label})`, () => {
		describeType.is.type(ctor, value);
	})

	.add(`Object.prototype.toString.call(${label}:${name})`, () => {
		Object.prototype.toString.call(value) === seal;
	})

	.add(`Object.prototype.toString.call(${label}:${name}).slice(8, -1)`, () => {
		Object.prototype.toString.call(value).slice(8, -1) === name;
	})

	.add(`Object.prototype.toString.call(${label}:${name}).replace(/\\[object\\s|\\]$/g, "")`, () => {
		Object.prototype.toString.call(value).replace(/\[object\s|\]$/g, '') === name;
	})

	.add(`toString.call(${label}:${name})`, () => {
		toString.call(value) === seal;
	})

	.add(`toString.call(${label}:${name}).slice(8, -1)`, () => {
		toString.call(value).slice(8, -1) === name;
	})

	.add(`toString.call(${label}:${name}).replace(/\\[object\\s|\\]$/g, "")`, () => {
		toString.call(value).replace(/\[object\s|\]$/g, '') === name;
	})

	.add(`${label}.constructor.toString().replace(/^.*function\\s([^\\s]*|[^(]*)\\([^\x00]+/m, "$1").replace(/\\s+/g, "")`, () => {
		if (value === undefined || value === null) return false;
		value.constructor.toString().replace(/^.*function\s([^\s]*|[^(]*)\([^\x00]+/m, '$1').replace(/\s+/g, '');
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/toString/, progress, loaded, total))

	.run({ async: false });
});
