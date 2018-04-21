import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#uint', () => {
	it('O método "uint" deve existir no escopo do módulo "is"', () => {
		expect(is.uint).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.uint.add(datatypes.zeroPositiveInteger);
		datatypes.uint.iterate(datatype => {
			it(`${datatype.id} • uint(${datatype.label}); // true`, () => {
				expect(is.uint(datatype.value)).toBe(true);
			});
		});
		datatypes.uint.remove(datatypes.zeroPositiveInteger);
	});

	test('false', () => {
		datatypes.decimal.iterate(datatype => {
			it(`${datatype.id} • uint(${datatype.label}); // false`, () => {
				expect(is.uint(datatype.value)).toBe(false);
			});
		});
	});
});
