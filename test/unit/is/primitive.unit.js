import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

describe('#primitive', () => {
	it('O método "primitive" deve existir no escopo do módulo "is"', () => {
		expect(is.primitive).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.primitive.iterate(datatype => {
			it(`${datatype.id} • primitive(${datatype.label}); // true`, () => {
				expect(is.primitive(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.iterate(datatype => {
			if (!is.primitive(datatype.value)) {
				it(`${datatype.id} • primitive(${datatype.label}); // false`, () => {
					expect(is.primitive(datatype.value)).toBe(false);
				});
			}
		});
	});
});
