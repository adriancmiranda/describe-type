import test from 'ava';
import { toSource } from 'fixtures/datatype/utils';
import * as is from '../../../is';

test('#max', () => {
	it('O método "max" deve existir no escopo do módulo "is"', () => {
		expect(is.max).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		[
			{ valueA: 1, valueB: [0, -1, 1] },
			{ valueA: -1, valueB: [-2, -1, -3] },
			{ valueA: 14, valueB: [2, 3, 14, 9] },
		].forEach(datatype => {
			it(`max(${String(datatype.valueA)}, ${toSource(datatype.valueB)}); // true`, () => {
				expect(is.max(datatype.valueA, datatype.valueB)).toBe(true);
			});
		});
	});

	test('false', () => {
		[
			{ valueA: 1, valueB: [] },
			{ valueA: 0, valueB: [] },
			{ valueA: 0, valueB: [2, 3, 4, 0] },
		].forEach(datatype => {
			it(`max(${String(datatype.valueA)}, ${toSource(datatype.valueB)}); // false`, () => {
				expect(is.max(datatype.valueA, datatype.valueB)).toBe(false);
			});
		});
	});
});
