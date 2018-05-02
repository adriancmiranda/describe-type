import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { number } from '../../.fixtures/datatypes.fixture';
import vendor from '../../fixtures/vendor.fixture';
import { is } from '../../..';

const nan1 = is.nan;
const nan2 = vendor.nan;

number.iterate((datatype) => {
	new Suite()

	.add(`describeType.is.nan(${datatype.name})`, () => {
		nan1(datatype.data);
	})

	.add(`vendor.nan(${datatype.name})`, () => {
		nan2(datatype.data);
	})

	.add(`isNan(${datatype.name})`, () => {
		isNaN(datatype.data);
	})

	.add(`${datatype.name} !== ${datatype.name}`, () => {
		datatype.data !== datatype.data;
	})

	.add(`!(${datatype.name} === ${datatype.name})`, () => {
		!(datatype.data === datatype.data);
	})

	.add(`${datatype.name} === ${datatype.name}`, () => {
		datatype.data === datatype.data;
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/[^describeType]/))

	.run({ async: false });
});
