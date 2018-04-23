import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { all } from '../../fixtures/datatypes.fixture';
import { is } from '../../../source';

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
		return is.any(ctor, value);
	})

	.add(`describeType.is.not.any(${name}, ${label})`, () => {
		return is.not.any(ctor, value) === true;
	})

	.add(`Object.prototype.toString.call(${label}) === ${seal}`, () => {
		return Object.prototype.toString.call(value) === seal;
	})

	.on('cycle', (evt) => {
		console.log(String(evt.target));
	})

	.on('complete', benchmarkFatestStatus(/toString/))

	.run({ async: false });
});
