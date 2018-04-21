import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture';
import * as is from '../../../source/is';

test('#a exposure', t => {
	t.is(toString.call(is), '[object Object]');
	t.is(toString.call(is.a), '[object Function]');
});

test('#a.type special cases', t => {
	t.is(is.a(Object, { constructor: 'foo' }), true);
	t.is(is.a(Object, { constructor: () => {} }), true);
	t.is(is.a(Object, { constructor: function() {} }), true);
	t.is(is.a(Object, { constructor: function unit() {} }), true);
	t.is(is.a(Object, { constructor: Object }), true;
	t.is(is.a(Object, { constructor: Number }), true);
	t.is(is.a(Object, { constructor: Function }), true);
	t.is(is.a(Object, new Number(666)), false);
	t.is(is.a(Object, 'nop'), false);
	t.is(is.a(Object, Math), false);
	t.is(is.a(Math, Math), true);

	// In global scope
	const inNode = new Function('try{return this===global;}catch(err){return false;}')();
	const env = inNode ? global : window;
	const envCtor = env.constructor;
	env.constructor = Object;
	t.is(is.a(Object, this), false); // should be global type yet.
	env.constructor = envCtor;
});

// test('#^a(n)?$', () => {
// 	it('O método "a" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.a), '[object Function]');
// 	});

// 	it('O atalho "an" deve ser igual ao método "a" por questões semânticas', () => {
// 		t.is(is.an, is.a);
// 	});

// 	test('true', () => {
// 		datatypes.all.iterate(datatype => {
// 			const fnName = /^-?[aeiou]/i.test(datatype.slug) ? 'an' : 'a';
// 			it(`${datatype.id} • ${fnName}(${datatype.slug}, ${datatype.label}); // true`, () => {
// 				t.is(is[fnName](datatype.ctor, datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.undef);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • an(undefined, ${datatype.label}); // false`, () => {
// 				t.is(is.an(undefined, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.undef);

// 		datatypes.all.remove(datatypes.nil);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(null, ${datatype.label}); // false`, () => {
// 				t.is(is.a(null, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.nil);

// 		datatypes.all.remove(datatypes.bool);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(Boolean, ${datatype.label}); // false`, () => {
// 				t.is(is.a(Boolean, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.bool);

// 		datatypes.all.remove(datatypes.string);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(String, ${datatype.label}); // false`, () => {
// 				t.is(is.a(String, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.string);

// 		datatypes.all.remove(datatypes.args);
// 		datatypes.all.remove(datatypes.object);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • an(Object, ${datatype.label}); // false`, () => {
// 				t.is(is.an(Object, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.args);
// 		datatypes.all.add(datatypes.object);

// 		datatypes.all.remove(datatypes.array);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • an(Array, ${datatype.label}); // false`, () => {
// 				t.is(is.an(Array, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.array);

// 		datatypes.all.remove(datatypes.callable);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(Function, ${datatype.label}); // false`, () => {
// 				t.is(is.a(Function, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.callable);

// 		datatypes.all.remove(datatypes.number);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(Number, ${datatype.label}); // false`, () => {
// 				t.is(is.a(Number, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.number);

// 		datatypes.all.remove(datatypes.regexp);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(RegExp, ${datatype.label}); // false`, () => {
// 				t.is(is.a(RegExp, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.regexp);

// 		datatypes.all.remove(datatypes.date);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • a(Date, ${datatype.label}); // false`, () => {
// 				t.is(is.a(Date, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.date);
// 	});
// });

