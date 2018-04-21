import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#numeric', () => {
	it('O método "numeric" deve existir no escopo do módulo "is"', () => {
		expect(is.numeric).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.numeric.iterate(datatype => {
			it(`${datatype.id} • numeric(${datatype.label}); // true`, () => {
				expect(is.numeric(datatype.value)).toBe(true);
			});
		});
	});

	test('false', () => {
		datatypes.all.remove(datatypes.nan);
		datatypes.all.remove(datatypes.infinity);
		datatypes.all.remove(datatypes.decimal);
		datatypes.all.remove(datatypes.number);
		datatypes.all.remove(datatypes.bool);
		datatypes.all.remove(datatypes.arraylikeNative);
		datatypes.all.remove(datatypes.arrayFilled);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • numeric(${datatype.label}); // false`, () => {
				expect(is.numeric(datatype.value)).toBe(false);
			});
		});
		datatypes.all.add(datatypes.nan);
		datatypes.all.add(datatypes.infinity);
		datatypes.all.add(datatypes.decimal);
		datatypes.all.add(datatypes.number);
		datatypes.all.add(datatypes.bool);
		datatypes.all.add(datatypes.arraylikeNative);
		datatypes.all.add(datatypes.arrayFilled);
	});
});
