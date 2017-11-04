import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '~/is';

describe('#exotic', () => {
	it('O método "exotic" deve existir no escopo do módulo "is"', () => {
		expect(is.exotic).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.all.iterate(datatype => {
			if (!is.primitive(datatype.value)) {
				it(`${datatype.id} • exotic(${datatype.label}); // true`, () => {
					expect(is.exotic(datatype.value)).toBe(true);
				});
			}
		});
	});

	describe('false', () => {
		datatypes.primitive.iterate(datatype => {
			it(`${datatype.id} • exotic(${datatype.label}); // false`, () => {
				expect(is.exotic(datatype.value)).toBe(false);
			});
		});
	});
});
