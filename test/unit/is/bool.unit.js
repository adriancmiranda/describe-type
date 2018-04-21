import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#bool', () => {
	it('O método "bool" deve existir no escopo do módulo "is"', () => {
		expect(is.bool).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.bool.iterate(datatype => {
			it(`${datatype.id} • bool(${datatype.label}); // true`, () => {
				expect(is.bool(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.bool(datatype.value)) {
				it(`${datatype.id} • bool(${datatype.label}); // false`, () => {
					expect(is.bool(datatype.value)).toBe(false);
				});
			}
		});
	});
});
