import test from 'ava';
import { toSource } from 'fixtures/datatype/utils';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#min', () => {
// 	it('O método "min" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.min), '[object Function]');
// 	});

// 	test('true', () => {
// 		[
// 			{ valueA: -1, valueB: [0, -1, 1] },
// 			{ valueA: -3, valueB: [-2, -1, -3] },
// 			{ valueA: 2, valueB: [2, 3, 14, 9] },
// 		].forEach(datatype => {
// 			it(`min(${String(datatype.valueA)}, ${toSource(datatype.valueB)}); // true`, () => {
// 				t.is(is.min(datatype.valueA, datatype.valueB), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		[
// 			{ valueA: 1, valueB: [] },
// 			{ valueA: 0, valueB: [] },
// 			{ valueA: 4, valueB: [2, 3, 4, 0] },
// 		].forEach(datatype => {
// 			it(`min(${String(datatype.valueA)}, ${toSource(datatype.valueB)}); // false`, () => {
// 				t.is(is.min(datatype.valueA, datatype.valueB), false);
// 			});
// 		});
// 	});
// });
