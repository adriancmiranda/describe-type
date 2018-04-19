import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

describe('#error', () => {
	it('O método "error" deve existir no escopo do módulo "is"', () => {
		expect(is.error).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.error.iterate(datatype => {
			it(`${datatype.id} • error(${datatype.label}); // true`, () => {
				expect(is.error(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.error(datatype.value)) {
				it(`${datatype.id} • error(${datatype.label}); // false`, () => {
					expect(is.error(datatype.value)).toBe(false);
				});
			}
		});
	});
});
