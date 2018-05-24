import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { all } from '../.fixtures/datatypes.fixture';
import vendor from '../.fixtures/vendor.fixture';
import { is } from '../index.next';

const exotic = is.exotic;
const primitive0 = (value) => !exotic(value);
const primitive1 = is.primitive;
const primitive2 = vendor.primitive;

all.iterate((datatype) => {
	new Suite()

	.add(`!describeType.is.exotic(${datatype.name})`, () => {
		primitive0(datatype);
	})

	.add(`describeType.is.primitive(${datatype.name})`, () => {
		primitive1(datatype);
	})

	.add(`vendor.primitive(${datatype.name})`, () => {
		primitive2(datatype);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/vendor/))

	.run({ async: false });
});
