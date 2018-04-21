import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#element', () => {
	it('O método "element" deve existir no escopo do módulo "is"', () => {
		expect(is.element).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.element.iterate(datatype => {
			it(`${datatype.id} • element(${datatype.label}); // true`, () => {
				expect(is.element(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.element);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • element(${datatype.label}); // false`, () => {
				expect(is.element(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.element);
	});
});

