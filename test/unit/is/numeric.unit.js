import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#numeric', () => {
	it('O método "numeric" deve existir no escopo do módulo "is"', () => {
		expect(is.numeric).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.numeric.iterate(datatype => {
			it(`${datatype.id} • numeric(${datatype.label}); // true`, () => {
				expect(is.numeric(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.remove(datatypes.nan);
		datatypes.all.remove(datatypes.infinity);
		datatypes.all.remove(datatypes.decimal);
		datatypes.all.remove(datatypes.number);
		datatypes.all.remove(datatypes.bool);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • numeric(${datatype.label}); // false`, () => {
				expect(is.numeric(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.nan);
		datatypes.all.add(datatypes.infinity);
		datatypes.all.add(datatypes.decimal);
		datatypes.all.add(datatypes.number);
		datatypes.all.add(datatypes.bool);
	});
});
