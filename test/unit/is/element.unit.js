import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

describe('#element', () => {
	it('O método "element" deve existir no escopo do módulo "is"', () => {
		expect(is.element).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.element.iterate(datatype => {
			it(`${datatype.id} • element(${datatype.label}); // true`, () => {
				expect(is.element(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.all.remove(datatypes.element);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • element(${datatype.label}); // false`, () => {
				expect(is.element(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.element);
	});
});

