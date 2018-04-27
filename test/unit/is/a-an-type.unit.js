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

test('#a.type special cases', t => {
	// t.is(is.a(Object, { constructor: 'foo' }, true), true, 'should be true');
	// t.is(is.a(Object, { constructor: () => {} }, true), true, 'should be true');
	// t.is(is.a(Object, { constructor: function() {} }, true), true, 'should be true');
	// t.is(is.a(Object, { constructor: function unit() {} }, true), true, 'should be true');
	// t.is(is.a(Object, { constructor: Object }, true), true, 'should be true');
	// t.is(is.a(Object, { constructor: Number }, true), true, 'should be true');
	// t.is(is.a(Object, { constructor: Function }, true), true, 'should be true');
	// t.is(is.a(Object, { constructor: undefined }), true, 'should be true');
	// t.is(is.a(Object, { constructor: Function, getPrototypeOf: 'foo', __proto__: 'foo' }, true), true);
	// t.is(is.a(Function, { constructor: 'foo' }, true), false);
	// t.is(is.a(Function, { constructor: () => {} }, true), false);
	// t.is(is.a(Function, { constructor: function() {} }, true), false);
	// t.is(is.a(Function, { constructor: function unit() {} }, true), false);
	// t.is(is.a(Function, { constructor: Object }, true), false);
	// t.is(is.a(Function, { constructor: Number }, true), false);
	// t.is(is.a(Function, { constructor: Function }, true), false);
	// t.is(is.a(undefined, { constructor: undefined }, true), false);
	// t.is(is.a(null, { constructor: null }, true), false);
	// t.is(is.a(Object, new Number(666)), false);
	// t.is(is.a(Object, 'nop'), false);

	// 4 performance reasons this treatment was ignored.
	// t.is(is.a(Object, Math), false);
	// t.is(is.a(Math, Object), false);
	// t.is(is.a(Math, Math), true);

	// In global scope
	const inNode = new Function('try{return this===global;}catch(err){return false;}')();
	const env = inNode ? global : window;
	const envCtor = env.constructor;
	env.constructor = Object;
	t.is(is.a(Object, this), false, '"this" should be a "global" type yet');
	env.constructor = envCtor;
});

datatypes.objectEvil.iterate(datatype => {
	const fnName = /^-?[aeiouy]/i.test(datatype.slug) ? 'an' : 'a';
	test(`${datatype.id} • ${fnName}(Object, ${datatype.label});`, (t) => {
		t.is(is[fnName](Object, datatype.value, true), true, `${datatype.label} should be Object`);
	});
});

datatypes.objectEvil.iterate(datatype => {
	const fnName = /^-?[aeiouy]/i.test(datatype.slug) ? 'an' : 'a';
	test(`${datatype.id} • ${fnName}(Function, ${datatype.label});`, (t) => {
		t.is(is[fnName](Function, datatype.value, true), false, `${datatype.label} should not be Function`);
	});
	test(`${datatype.id} • ${fnName}(undefined, ${datatype.label});`, (t) => {
		t.is(is[fnName](undefined, datatype.value, true), false, `${datatype.label} should not be undefined`);
	});
	test(`${datatype.id} • ${fnName}(null, ${datatype.label});`, (t) => {
		t.is(is[fnName](null, datatype.value, true), false, `${datatype.label} should not be null`);
	});
});

datatypes.all.iterate(datatype => {
	const fnName = /^-?[aeiouy]/i.test(datatype.slug) ? 'an' : 'a';
	test(`${datatype.id} • ${fnName}(${datatype.slug}, ${datatype.label});`, (t) => {
		t.is(is[fnName](datatype.ctor, datatype.value), true, `${datatype.label} should be true`);
	});
});

datatypes.all.remove(datatypes.undef);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • an(undefined, ${datatype.label});`, (t) => {
		t.is(is.an(undefined, datatype.value), false, `${datatype.label} should not be undefined`);
	});
});
datatypes.all.add(datatypes.undef);

datatypes.all.remove(datatypes.nil);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(null, ${datatype.label});`, (t) => {
		t.is(is.a(null, datatype.value), false, `${datatype.label} should not be null`);
	});
});
datatypes.all.add(datatypes.nil);

datatypes.all.remove(datatypes.bool);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(Boolean, ${datatype.label});`, (t) => {
		t.is(is.a(Boolean, datatype.value), false, `${datatype.label} should not be Boolean`);
	});
});
datatypes.all.add(datatypes.bool);

datatypes.all.remove(datatypes.string);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(String, ${datatype.label});`, (t) => {
		t.is(is.a(String, datatype.value), false, `${datatype.label} should not be String`);
	});
});
datatypes.all.add(datatypes.string);

datatypes.all.remove(datatypes.args);
datatypes.all.remove(datatypes.object);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • an(Object, ${datatype.label});`, (t) => {
		t.is(is.an(Object, datatype.value), false, `${datatype.label} should not be Object`);
	});
});
datatypes.all.add(datatypes.args);
datatypes.all.add(datatypes.object);

datatypes.all.remove(datatypes.array);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • an(Array, ${datatype.label});`, (t) => {
		t.is(is.an(Array, datatype.value), false, `${datatype.label} should not be Array`);
	});
});
datatypes.all.add(datatypes.array);

datatypes.all.remove(datatypes.callable);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(Function, ${datatype.label});`, (t) => {
		t.is(is.a(Function, datatype.value), false, `${datatype.label} should not be Function`);
	});
});
datatypes.all.add(datatypes.callable);

datatypes.all.remove(datatypes.number);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(Number, ${datatype.label});`, (t) => {
		t.is(is.a(Number, datatype.value), false, `${datatype.label} should not be Number`);
	});
});
datatypes.all.add(datatypes.number);

datatypes.all.remove(datatypes.regexp);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(RegExp, ${datatype.label});`, (t) => {
		t.is(is.a(RegExp, datatype.value), false, `${datatype.label} should not be RegExp`);
	});
});
datatypes.all.add(datatypes.regexp);

datatypes.all.remove(datatypes.date);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(Date, ${datatype.label});`, (t) => {
		t.is(is.a(Date, datatype.value), false, `${datatype.label} should not be Date`);
	});
});
datatypes.all.add(datatypes.date);

