import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#date', () => {
	it('O método "date" deve existir no escopo do módulo "is"', () => {
		expect(is.date).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.date.iterate(datatype => {
			it(`${datatype.id} • date(${datatype.label}); // true`, () => {
				expect(is.date(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.date(datatype.value)) {
				it(`${datatype.id} • date(${datatype.label}); // false`, () => {
					expect(is.date(datatype.value)).toBe(false);
				});
			}
		});
	});
});
