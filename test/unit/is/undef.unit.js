import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#undef', () => {
	it('O método "undef" deve existir no escopo do módulo "is"', () => {
		expect(is.undef).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.undef.iterate(datatype => {
			it(`${datatype.id} • undef(${datatype.label}); // true`, () => {
				expect(is.undef(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.undef(datatype.value)) {
				it(`${datatype.id} • undef(${datatype.label}); // false`, () => {
					expect(is.undef(datatype.value)).toBe(false);
				});
			}
		});
	});
});
