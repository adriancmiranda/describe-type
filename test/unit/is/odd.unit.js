import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#odd', () => {
	it('O método "odd" deve existir no escopo do módulo "is"', () => {
		expect(is.odd).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.odd.iterate(datatype => {
			it(`${datatype.id} • odd(${datatype.label}); // true`, () => {
				expect(is.odd(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.remove(datatypes.infinity);
		datatypes.all.remove(datatypes.decimal);
		datatypes.all.remove(datatypes.number);
		datatypes.all.add(datatypes.even);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • odd(${datatype.label}); // false`, () => {
				expect(is.odd(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.infinity);
		datatypes.all.add(datatypes.decimal);
		datatypes.all.add(datatypes.number);
		datatypes.all.remove(datatypes.even);
	});
});
