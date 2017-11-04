import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#nil', () => {
	it('O método "nil" deve existir no escopo do módulo "is"', () => {
		expect(is.nil).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.nil.iterate(datatype => {
			it(`${datatype.id} • nil(${datatype.label}); // true`, () => {
				expect(is.nil(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.nil(datatype.value)) {
				it(`${datatype.id} • nil(${datatype.label}); // false`, () => {
					expect(is.nil(datatype.value)).toBe(false);
				});
			}
		});
	});
});
