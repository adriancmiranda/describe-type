import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('#hexadecimal', () => {
	it('O método "hexadecimal" deve existir no escopo do módulo "is"', () => {
		expect(is.hexadecimal).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.hexadecimal.iterate(datatype => {
			it(`${datatype.id} • hexadecimal(${datatype.label}); // true`, () => {
				expect(is.hexadecimal(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.string);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • hexadecimal(${datatype.label}); // false`, () => {
				expect(is.hexadecimal(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.string);
	});
});
