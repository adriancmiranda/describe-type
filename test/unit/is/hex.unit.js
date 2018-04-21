import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('#hex', () => {
	it('O método "hex" deve existir no escopo do módulo "is"', () => {
		expect(is.hex).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.hex.iterate(datatype => {
			it(`${datatype.id} • hex(${datatype.label}); // true`, () => {
				expect(is.hex(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.string);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • hex(${datatype.label}); // false`, () => {
				expect(is.hex(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.string);
	});
});
