import test from 'ava';
import { toSource } from '../.fixtures/datatype/utils';
import * as describeType from '../index.next';
import max from './max.next';

test('describeType.is.max exposure', (t) => {
	t.is(toString.call(describeType.is.max), '[object Function]', 'should be a function');
});

test('max exposure', (t) => {
	t.is(toString.call(max), '[object Function]', 'should be a function');
});

[
	{ valueA: 1, valueB: [0, -1, 1] },
	{ valueA: -1, valueB: [-2, -1, -3] },
	{ valueA: 14, valueB: [2, 3, 14, 9] },
].forEach(datatype => {
	test(`max(${String(datatype.valueA)}, ${toSource(datatype.valueB)});`, (t) => {
		t.is(max(datatype.valueA, datatype.valueB), true);
	});
});

[
	{ valueA: 1, valueB: [] },
	{ valueA: 0, valueB: [] },
	{ valueA: 0, valueB: [2, 3, 4, 0] },
].forEach(datatype => {
	test(`max(${String(datatype.valueA)}, ${toSource(datatype.valueB)});`, (t) => {
		t.is(max(datatype.valueA, datatype.valueB), false);
	});
});
