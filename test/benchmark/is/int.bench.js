import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../../fixtures/speed';
import { is } from '../../../source';

function integer(value) {
	return parseFloat(value) === parseInt(value, 10);
}

new Suite()

.add('integer', () => {
	integer(Infinity);
})

.add('describeType.is.integer', () => {
	is.integer(Infinity);
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
