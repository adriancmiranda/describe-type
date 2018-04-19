import { toSource } from 'fixtures/datatype/utils';
import * as is from '../../../is';

describe('#min', () => {
	it('O método "min" deve existir no escopo do módulo "is"', () => {
		expect(is.min).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		[
			{ valueA: -1, valueB: [0, -1, 1] },
			{ valueA: -3, valueB: [-2, -1, -3] },
			{ valueA: 2, valueB: [2, 3, 14, 9] },
		].forEach(datatype => {
			it(`min(${String(datatype.valueA)}, ${toSource(datatype.valueB)}); // true`, () => {
				expect(is.min(datatype.valueA, datatype.valueB)).toBe(true);
			});
		});
	});

	describe('false', () => {
		[
			{ valueA: 1, valueB: [] },
			{ valueA: 0, valueB: [] },
			{ valueA: 4, valueB: [2, 3, 4, 0] },
		].forEach(datatype => {
			it(`min(${String(datatype.valueA)}, ${toSource(datatype.valueB)}); // false`, () => {
				expect(is.min(datatype.valueA, datatype.valueB)).toBe(false);
			});
		});
	});
});
