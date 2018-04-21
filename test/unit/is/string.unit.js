import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#string', () => {
	it('O método "string" deve existir no escopo do módulo "is"', () => {
		expect(is.string).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.string.iterate(datatype => {
			it(`${datatype.id} • string(${datatype.label}); // true`, () => {
				expect(is.string(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.string);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • string(${datatype.label}); // false`, () => {
				expect(is.string(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.string);
	});
});
