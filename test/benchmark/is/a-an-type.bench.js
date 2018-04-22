import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/colors';
import { number } from '../../fixtures/datatypes.fixture';
import { is } from '../../../source';

let i = 0;
number.iterate((datatype) => {
	const name = datatype.name;
	const seal = datatype.seal;
	const label = datatype.label;
	const ctor = datatype.ctor;
	const value = datatype.value;
	const loaded = ++i;
	const total = number.size();
	const progress = Math.round((loaded / total) * 100);
	
	new Suite()

	.add(`describeType.is.a(${name}, ${label})`, () => {
		return is.type(ctor, value);
	})

	.add(`describeType.is.not.a(${name}, ${label})`, () => {
		return is.not.type(ctor, value) === true;
	})

	.add(`Object.prototype.toString.call(${label}) === ${seal}`, () => {
		return Object.prototype.toString.call(value) === seal;
	})

	.on('cycle', (evt) => {
		console.log(String(evt.target));
	})

	.on('complete', function () {
		const fastest = this.filter('fastest').map('name');
		const color = benchmarkFatestStatus(fastest, /^Object\.prototype\.toString/);
		console.log(`\nFastest is:\n${color(fastest.join('\n'))}\n${chalk.underline(`${progress}% - ${loaded} de ${total}`)}\n`);
	})

	.run();
});
