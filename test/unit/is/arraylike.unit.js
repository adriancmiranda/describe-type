import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#arraylike', () => {
	it('O método "arraylike" deve existir no escopo do módulo "is"', () => {
		expect(is.arraylike).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.arraylike.iterate(datatype => {
			it(`${datatype.id} • arraylike(${datatype.label}); // true`, () => {
				expect(is.arraylike(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.notArraylike.iterate(datatype => {
			it(`${datatype.id} • arraylike(${datatype.label}); // false`, () => {
				expect(is.arraylike(datatype.value)).toBe(false);
			});
		});
	});
});

