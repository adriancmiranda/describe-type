import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '~/is';

describe('#not', () => {
	it('O método "not" deve existir no escopo do módulo "is"', () => {
		expect(is.not).toEqual(jasmine.any(Function));
	});

	describe('true', () => {
		datatypes.all.remove(datatypes.undef);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(undefined, ${datatype.label}); // true`, () => {
				expect(is.not(undefined, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.undef);

		datatypes.all.remove(datatypes.nil);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(null, ${datatype.label}); // true`, () => {
				expect(is.not(null, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.nil);

		datatypes.all.remove(datatypes.bool);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(Boolean, ${datatype.label}); // true`, () => {
				expect(is.not(Boolean, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.bool);

		datatypes.all.remove(datatypes.string);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(String, ${datatype.label}); // true`, () => {
				expect(is.not(String, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.string);

		datatypes.all.remove(datatypes.args);
		datatypes.all.remove(datatypes.object);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(Object, ${datatype.label}); // true`, () => {
				expect(is.not(Object, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.object);

		datatypes.all.remove(datatypes.array);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(Array, ${datatype.label}); // true`, () => {
				expect(is.not(Array, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.array);

		datatypes.all.remove(datatypes.callable);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(Function, ${datatype.label}); // true`, () => {
				expect(is.not(Function, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.callable);

		// datatypes.all.remove(datatypes.number);
		// datatypes.all.iterate(datatype => {
		// 	it(`${datatype.id} • not(Number, ${datatype.label}); // true`, () => {
		// 		expect(is.not(Number, datatype.value)).toBe(true);
		// 	});
		// });
		// datatypes.all.add(datatypes.number);

		datatypes.all.remove(datatypes.regexp);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(RegExp, ${datatype.label}); // true`, () => {
				expect(is.not(RegExp, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.regexp);

		datatypes.all.remove(datatypes.date);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • not(Date, ${datatype.label}); // true`, () => {
				expect(is.not(Date, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.date);
	});

	describe('false', () => {
	});
});

