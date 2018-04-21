import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('#jsonlike', () => {
	it('O método "jsonlike" deve existir no escopo do módulo "is"', () => {
		expect(is.jsonlike).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.jsonlike.iterate(datatype => {
			it(`jsonlike(${datatype.label}); // true`, () => {
				expect(is.jsonlike(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.iterate(datatype => {
			it(`jsonlike(${datatype.label}); // false`, () => {
				expect(is.jsonlike(datatype.value)).toBe(false);
			});
		});
	});
});
