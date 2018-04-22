import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/colors';
import { number } from '../../fixtures/datatypes.fixture';
import vendor from '../../fixtures/vendor.fixture';
import { is } from '../../../source';

const nan1 = is.nan;
const nan2 = vendor.nan;

number.iterate((datatype) => {
	const suite = new Suite();

	suite.add(`describeType.is.nan(${datatype.name})`, () => {
		return nan1(datatype.data);
	});

	suite.add(`vendor.nan(${datatype.name})`, () => {
		return nan2(datatype.data);
	});

	suite.add(`isNan(${datatype.name})`, () => {
		return isNaN(datatype.data);
	});

	suite.add(`${datatype.name} !== ${datatype.name}`, () => {
		return datatype.data !== datatype.data;
	});

	suite.add(`!(${datatype.name} === ${datatype.name})`, () => {
		return !(datatype.data === datatype.data);
	});

	suite.add(`${datatype.name} === ${datatype.name}`, () => {
		return datatype.data === datatype.data;
	});

	suite.on('cycle', (evt) => {
		console.log(String(evt.target));
	});

	suite.on('complete', function () {
		console.log('\nFastest is', this.filter('fastest').map('name'), '\n');
	});

	suite.run();
});
