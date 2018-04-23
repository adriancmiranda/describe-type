import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { all } from '../../fixtures/datatypes.fixture';
import vendor from '../../fixtures/vendor.fixture';
import { is } from '../../../source';

const exotic = is.exotic;
const primitive0 = (value) => !exotic(value);
const primitive1 = is.primitive;
const primitive2 = vendor.primitive;

all.iterate((datatype) => {
	new Suite()

	.add(`!describeType.is.exotic(${datatype.name})`, () => {
		return primitive0(datatype);
	})

	.add(`describeType.is.primitive(${datatype.name})`, () => {
		return primitive1(datatype);
	})

	.add(`vendor.primitive(${datatype.name})`, () => {
		return primitive2(datatype);
	})

	.on('cycle', (evt) => {
		console.log(String(evt.target));
	})

	.on('complete', benchmarkFatestStatus(/vendor/))

	.run({ async: false });
});
