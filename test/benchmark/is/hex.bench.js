import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/colors';
import { numbers } from '../../fixtures/datatypes.fixture';
import { is } from '../../../source';

const hex0 = is.hex;
const hex1 = h => parseInt(h, 16).toString(16) === h.toLowerCase();

numbers.iterate((datatype) => {
	const suite = new Suite();

	suite.add(`describeType.is.hex(${datatype.name})`, () => {
		return hex0(datatype.data);
	});

	suite.add(`hex(${datatype.name})`, () => {
		return hex1(datatype.data);
	});

	suite.on('cycle', (evt) => {
		console.log(String(evt.target));
	});

	suite.on('complete', function () {
		console.log('\nFastest is', this.filter('fastest').map('name'), '\n');
	});

	suite.run();
});
