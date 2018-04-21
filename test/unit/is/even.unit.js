import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#even', () => {
	it('O método "even" deve existir no escopo do módulo "is"', () => {
		expect(is.even).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.even.iterate(datatype => {
			it(`${datatype.id} • even(${datatype.label}); // true`, () => {
				expect(is.even(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.number);
		datatypes.all.add(datatypes.odd);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • even(${datatype.label}); // false`, () => {
				expect(is.even(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.number);
		datatypes.all.remove(datatypes.odd);
	});
});
