import test from 'ava';
import { toSource } from '../../fixtures/datatype/utils';
import * as describeType from '../index.js';
import min from '../../../is/min';

test('describeType.is.min exposure', (t) => {
	t.is(toString.call(describeType.is.min), '[object Function]', 'should be a function');
});

test('min exposure', (t) => {
	t.is(toString.call(min), '[object Function]', 'should be a function');
});

[
	{ valueA: -1, valueB: [0, -1, 1] },
	{ valueA: -3, valueB: [-2, -1, -3] },
	{ valueA: 2, valueB: [2, 3, 14, 9] },
].forEach(datatype => {
	test(`min(${String(datatype.valueA)}, ${toSource(datatype.valueB)});`, (t) => {
		t.is(min(datatype.valueA, datatype.valueB), true);
	});
});

[
	{ valueA: 1, valueB: [] },
	{ valueA: 0, valueB: [] },
	{ valueA: 4, valueB: [2, 3, 4, 0] },
].forEach(datatype => {
	test(`min(${String(datatype.valueA)}, ${toSource(datatype.valueB)});`, (t) => {
		t.is(min(datatype.valueA, datatype.valueB), false);
	});
});
