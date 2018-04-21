import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#symbol', () => {
	it('O método "symbol" deve existir no escopo do módulo "is"', () => {
		expect(is.symbol).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.symbol.iterate(datatype => {
			it(`${datatype.id} • symbol(${datatype.label}); // true`, () => {
				expect(is.symbol(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.symbol);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • symbol(${datatype.label}); // false`, () => {
				expect(is.symbol(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.symbol);
	});
});
