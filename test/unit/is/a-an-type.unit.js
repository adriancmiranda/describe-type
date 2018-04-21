import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture';
import * as is from '../../../source/is';

test('is exposure', t => {
	t.is(toString.call(is), '[object Object]', 'should be a namespace');
});

test('/^(a(n)?|type)$/ exposure', t => {
	t.is(toString.call(is.a), '[object Function]', 'should be a function');
	t.is(toString.call(is.an), '[object Function]', 'should be a function');
	t.is(toString.call(is.type), '[object Function]', 'should be a function');
});

test('/^(a(n)?|type)$/ aliases', t => {
	t.is(is.a, is.an, '"a" should be equal "an"');
	t.is(is.an, is.type, '"an" should be equal "type"');
});

// test('#a.type special cases', t => {
// 	t.is(is.a(Object, { constructor: 'foo' }), true);
// 	t.is(is.a(Object, { constructor: () => {} }), true);
// 	t.is(is.a(Object, { constructor: function() {} }), true);
// 	t.is(is.a(Object, { constructor: function unit() {} }), true);
// 	t.is(is.a(Object, { constructor: Object }), true);
// 	t.is(is.a(Object, { constructor: Number }), true);
// 	t.is(is.a(Object, { constructor: Function }), true);
// 	t.is(is.a(Object, new Number(666)), false);
// 	t.is(is.a(Object, 'nop'), false);
// 	t.is(is.a(Object, Math), false);
// 	t.is(is.a(Math, Object), false);
// 	t.is(is.a(Math, Math), true);

// 	// In global scope
// 	const inNode = new Function('try{return this===global;}catch(err){return false;}')();
// 	const env = inNode ? global : window;
// 	const envCtor = env.constructor;
// 	env.constructor = Object;
// 	t.is(is.a(Object, this), false); // should be global type yet.
// 	env.constructor = envCtor;
// });

// datatypes.all.iterate(datatype => {
// 	const fnName = /^-?[aeiouy]/i.test(datatype.slug) ? 'an' : 'a';
// 	test(`${datatype.id} • ${fnName}(${datatype.slug}, ${datatype.label}); // true`, (t) => {
// 		t.is(is[fnName](datatype.ctor, datatype.value), true, 'should be true');
// 	});
// });

// 	datatypes.all.remove(datatypes.undef);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • an(undefined, ${datatype.label}); // false`, (t) => {
// 			t.is(is.an(undefined, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.undef);

// 	datatypes.all.remove(datatypes.nil);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • a(null, ${datatype.label}); // false`, (t) => {
// 			t.is(is.a(null, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.nil);

// 	datatypes.all.remove(datatypes.bool);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • a(Boolean, ${datatype.label}); // false`, (t) => {
// 			t.is(is.a(Boolean, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.bool);

// 	datatypes.all.remove(datatypes.string);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • a(String, ${datatype.label}); // false`, (t) => {
// 			t.is(is.a(String, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.string);

// 	datatypes.all.remove(datatypes.args);
// 	datatypes.all.remove(datatypes.object);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • an(Object, ${datatype.label}); // false`, (t) => {
// 			t.is(is.an(Object, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.args);
// 	datatypes.all.add(datatypes.object);

// 	datatypes.all.remove(datatypes.array);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • an(Array, ${datatype.label}); // false`, (t) => {
// 			t.is(is.an(Array, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.array);

// 	datatypes.all.remove(datatypes.callable);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • a(Function, ${datatype.label}); // false`, (t) => {
// 			t.is(is.a(Function, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.callable);

// 	datatypes.all.remove(datatypes.number);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • a(Number, ${datatype.label}); // false`, (t) => {
// 			t.is(is.a(Number, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.number);

// 	datatypes.all.remove(datatypes.regexp);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • a(RegExp, ${datatype.label}); // false`, (t) => {
// 			t.is(is.a(RegExp, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.regexp);

// 	datatypes.all.remove(datatypes.date);
// 	datatypes.all.iterate(datatype => {
// 		test(`${datatype.id} • a(Date, ${datatype.label}); // false`, (t) => {
// 			t.is(is.a(Date, datatype.value), false, 'should be false');
// 		});
// 	});
// 	datatypes.all.add(datatypes.date);

