import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#nativeFunction', () => {
	it('O método "nativeFunction" deve existir no escopo do módulo "is"', () => {
		expect(is.nativeFunction).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.nativeFunction.iterate(datatype => {
			it(`${datatype.id} • nativeFunction(${datatype.label}); // true`, () => {
				expect(is.nativeFunction(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • nativeFunction(${datatype.label}); // false`, () => {
				expect(is.nativeFunction(datatype.value)).toBe(false);
			});
		});
	});
});
