import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { numbers } from '../.fixtures/datatypes.fixture';
import { is } from '../index.next';

const hex0 = is.hex;
const hex1 = h => parseInt(h, 16).toString(16) === h.toLowerCase();

numbers.iterate((datatype) => {
	new Suite()

	.add(`describeType.is.hex(${datatype.name})`, () => {
		hex0(datatype.data);
	})

	.add(`hex(${datatype.name})`, () => {
		hex1(datatype.data);
	})

	.on('cycle', benchmarkCycle())

	.on('complete', benchmarkFatestStatus(/[^describeType]/))

	.run({ async: false });
});
