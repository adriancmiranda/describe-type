import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#object', () => {
	it('O método "object" deve existir no escopo do módulo "is"', () => {
		expect(is.object).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.object.iterate(datatype => {
			it(`${datatype.id} • object(${datatype.label}); // true`, () => {
				expect(is.object(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.object(datatype.value)) {
				it(`${datatype.id} • object(${datatype.label}); // false`, () => {
					expect(is.object(datatype.value)).toBe(false);
				});
			}
		});
	});
});
