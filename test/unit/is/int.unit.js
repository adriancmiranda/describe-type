import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#int', () => {
	it('O método "int" deve existir no escopo do módulo "is"', () => {
		expect(is.int).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.int.add(datatypes.zero);
		datatypes.int.iterate(datatype => {
			it(`${datatype.id} • int(${datatype.label}); // true`, () => {
				expect(is.int(datatype.value)).toBe(true);
			});
		});
		datatypes.int.remove(datatypes.zero);
	});

	test('false', () => {
		datatypes.decimal.iterate(datatype => {
			it(`${datatype.id} • int(${datatype.label}); // true`, () => {
				expect(is.int(datatype.value)).toBe(false);
			});
		});
	});
});
