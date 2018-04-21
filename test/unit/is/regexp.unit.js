import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#regexp', () => {
	it('O método "regexp" deve existir no escopo do módulo "is"', () => {
		expect(is.regexp).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.regexp.iterate(datatype => {
			it(`${datatype.id} • regexp(${datatype.label}); // true`, () => {
				expect(is.regexp(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.regexp(datatype.value)) {
				it(`${datatype.id} • regexp(${datatype.label}); // false`, () => {
					expect(is.regexp(datatype.value)).toBe(false);
				});
			}
		});
	});
});
