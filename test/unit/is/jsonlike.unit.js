import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '~/is';

describe('#jsonlike', () => {
	it('O método "jsonlike" deve existir no escopo do módulo "is"', () => {
		expect(is.jsonlike).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.jsonlike.iterate(datatype => {
			it(`jsonlike(${datatype.label}); // true`, () => {
				expect(is.jsonlike(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.iterate(datatype => {
			it(`jsonlike(${datatype.label}); // false`, () => {
				expect(is.jsonlike(datatype.value)).toBe(false);
			});
		});
	});
});
