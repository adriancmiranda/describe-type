import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture';
import * as is from '../../../source/is';

// describe('#^a(n)?$', () => {
// 	it('O método "a" deve existir no escopo do módulo "is"', () => {
// 		expect(is.a).toEqual(jasmine.any(Function));
// 	});

// 	it('O atalho "an" deve ser igual ao método "a" por questões semânticas', () => {
// 		expect(is.an).toEqual(is.a);
// 	});

// 	describe('true', () => {
// 		datatypes.all.iterate(datatype => {
// 			const fnName = /^-?[aeiou]/i.test(datatype.slug) ? 'an' : 'a';
// 			it(`${datatype.id} • ${fnName}(${datatype.slug}, ${datatype.label}); // true`, () => {
// 				expect(is[fnName](datatype.ctor, datatype.value)).toBe(true);
// 			});
// 		});
// 	});

// 	describe('false', () => {
// 		datatypes.all.remove(datatypes.undef);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • an(undefined, ${datatype.label}); // false`, () => {
// 				expect(is.an(undefined, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.undef);

// 		datatypes.all.remove(datatypes.nil);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(null, ${datatype.label}); // false`, () => {
// 				expect(is.a(null, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.nil);

// 		datatypes.all.remove(datatypes.bool);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(Boolean, ${datatype.label}); // false`, () => {
// 				expect(is.a(Boolean, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.bool);

// 		datatypes.all.remove(datatypes.string);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(String, ${datatype.label}); // false`, () => {
// 				expect(is.a(String, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.string);

// 		datatypes.all.remove(datatypes.args);
// 		datatypes.all.remove(datatypes.object);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • an(Object, ${datatype.label}); // false`, () => {
// 				expect(is.an(Object, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.args);
// 		datatypes.all.add(datatypes.object);

// 		datatypes.all.remove(datatypes.array);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • an(Array, ${datatype.label}); // false`, () => {
// 				expect(is.an(Array, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.array);

// 		datatypes.all.remove(datatypes.callable);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(Function, ${datatype.label}); // false`, () => {
// 				expect(is.a(Function, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.callable);

// 		datatypes.all.remove(datatypes.number);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(Number, ${datatype.label}); // false`, () => {
// 				expect(is.a(Number, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.number);

// 		datatypes.all.remove(datatypes.regexp);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(RegExp, ${datatype.label}); // false`, () => {
// 				expect(is.a(RegExp, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.regexp);

// 		datatypes.all.remove(datatypes.date);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(Date, ${datatype.label}); // false`, () => {
// 				expect(is.a(Date, datatype.value)).toBe(false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.date);
// 	});
// });

