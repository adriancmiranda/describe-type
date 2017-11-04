import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#number', () => {
	it('O método "number" deve existir no escopo do módulo "is"', () => {
		expect(is.number).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.number.iterate(datatype => {
			it(`${datatype.id} • number(${datatype.label}); // true`, () => {
				expect(is.number(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.number(datatype.value)) {
				it(`${datatype.id} • number(${datatype.label}); // false`, () => {
					expect(is.number(datatype.value)).toBe(false);
				});
			}
		});
	});
});
