import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { number } from '../../fixtures/datatypes.fixture';
import vendor from '../../fixtures/vendor.fixture';
import { is } from '../../../source';

const nan1 = is.nan;
const nan2 = vendor.nan;

number.iterate((datatype) => {
	new Suite()

	.add(`describeType.is.nan(${datatype.name})`, () => {
		return nan1(datatype.data);
	})

	.add(`vendor.nan(${datatype.name})`, () => {
		return nan2(datatype.data);
	})

	.add(`isNan(${datatype.name})`, () => {
		return isNaN(datatype.data);
	})

	.add(`${datatype.name} !== ${datatype.name}`, () => {
		return datatype.data !== datatype.data;
	})

	.add(`!(${datatype.name} === ${datatype.name})`, () => {
		return !(datatype.data === datatype.data);
	})

	.add(`${datatype.name} === ${datatype.name}`, () => {
		return datatype.data === datatype.data;
	})

	.on('cycle', (evt) => {
		console.log(String(evt.target));
	})

	.on('complete', benchmarkFatestStatus(/[^describeType]/))

	.run();
});
