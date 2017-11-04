import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#bool', () => {
	it('O método "bool" deve existir no escopo do módulo "is"', () => {
		expect(is.bool).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.bool.iterate(datatype => {
			it(`${datatype.id} • bool(${datatype.label}); // true`, () => {
				expect(is.bool(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.bool(datatype.value)) {
				it(`${datatype.id} • bool(${datatype.label}); // false`, () => {
					expect(is.bool(datatype.value)).toBe(false);
				});
			}
		});
	});
});
