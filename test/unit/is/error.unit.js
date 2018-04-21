import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#error', () => {
	it('O método "error" deve existir no escopo do módulo "is"', () => {
		expect(is.error).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.error.iterate(datatype => {
			it(`${datatype.id} • error(${datatype.label}); // true`, () => {
				expect(is.error(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.error(datatype.value)) {
				it(`${datatype.id} • error(${datatype.label}); // false`, () => {
					expect(is.error(datatype.value)).toBe(false);
				});
			}
		});
	});
});
