import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#any', () => {
	it('O método "any" deve existir no escopo do módulo "is"', () => {
		expect(is.any).toEqual(jasmine.any(Function));
	});

	const errorCtors = datatypes.error.extract('ctor');
	const errorNames = datatypes.error.extract('name');

	test('true', () => {
		datatypes.error.iterate(datatype => {
			it(`${datatype.id} • any([${errorNames}], ${datatype.label}); // true`, () => {
				expect(is.any(errorCtors, datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.error);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • any([${errorNames}], ${datatype.label}); // false`, () => {
				expect(is.any(errorCtors, datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.error);
	});
});
