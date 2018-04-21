import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#callable', () => {
	it('O método "callable" deve existir no escopo do módulo "is"', () => {
		expect(is.callable).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.callable.iterate(datatype => {
			it(`${datatype.id} • callable(${datatype.label}); // true`, () => {
				expect(is.callable(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.callable(datatype.value)) {
				it(`${datatype.id} • callable(${datatype.label}); // false`, () => {
					expect(is.callable(datatype.value)).toBe(false);
				});
			}
		});
	});
});
