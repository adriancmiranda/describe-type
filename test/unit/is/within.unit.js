import * as is from '~/is';

describe('#within', () => {
	it('O método "within" deve existir no escopo do módulo "is"', () => {
		expect(is.within).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		[
			{ value: -2, start: -10, finish: -1 },
			{ value: 4, start: 0, finish: 9 },
		].forEach(datatype => {
			it(`within(${String(datatype.value)}, ${String(datatype.start)}, ${String(datatype.finish)}); // true`, () => {
				expect(is.within(datatype.value, datatype.start, datatype.finish)).toBe(true);
			});
		});
	});

	describe('false', () => {
		[
			{ value: 0, start: -10, finish: -1 },
			{ value: 10, start: 0, finish: 9 },
		].forEach(datatype => {
			it(`within(${String(datatype.value)}, ${String(datatype.start)}, ${String(datatype.finish)}); // false`, () => {
				expect(is.within(datatype.value, datatype.start, datatype.finish)).toBe(false);
			});
		});
	});
});
