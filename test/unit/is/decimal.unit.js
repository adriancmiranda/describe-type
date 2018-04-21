import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#decimal', () => {
	it('O método "decimal" deve existir no escopo do módulo "is"', () => {
		expect(is.decimal).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.decimal.iterate(datatype => {
			it(`${datatype.id} • decimal(${datatype.label}); // true`, () => {
				expect(is.decimal(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.decimal);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • decimal(${datatype.label}); // false`, () => {
				expect(is.decimal(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.decimal);
	});
});
