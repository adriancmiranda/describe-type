import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

describe('#array', () => {
	it('O método "array" deve existir no escopo do módulo "is"', () => {
		expect(is.array).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.array.iterate(datatype => {
			it(`${datatype.id} • array(${datatype.label}); // true`, () => {
				expect(is.array(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.array(datatype.value)) {
				it(`${datatype.id} • array(${datatype.label}); // false`, () => {
					expect(is.array(datatype.value)).toBe(false);
				});
			}
		});
	});
});
