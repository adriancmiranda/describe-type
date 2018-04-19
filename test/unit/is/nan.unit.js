import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

describe('#nan', () => {
	it('O método "nan" deve existir no escopo do módulo "is"', () => {
		expect(is.nan).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.nan.iterate(datatype => {
			it(`${datatype.id} • nan(${datatype.label}); // true`, () => {
				expect(is.nan(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.number.remove(datatypes.nan);
		datatypes.number.iterate(datatype => {
			it(`${datatype.id} • nan(${datatype.label}); // false`, () => {;
				expect(is.nan(datatype.value)).toBe(false);
			});
		});
		datatypes.number.add(datatypes.nan);
	});
});
