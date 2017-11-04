import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#infinity', () => {
	it('O método "infinity" deve existir no escopo do módulo "is"', () => {
		expect(is.infinity).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.infinity.iterate(datatype => {
			it(`${datatype.id} • infinity(${datatype.label}); // true`, () => {
				expect(is.infinity(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.remove(datatypes.infinity);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • infinity(${datatype.label}); // false`, () => {
				expect(is.infinity(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.infinity);
	});
});
