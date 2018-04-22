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

datatypes.all.iterate(datatype => {
	const fnName = /^-?[aeiouy]/i.test(datatype.slug) ? 'an' : 'a';
	test(`${datatype.id} • ${fnName}(${datatype.slug}, ${datatype.label});`, (t) => {
		t.is(is[fnName](datatype.ctor, datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.undef);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • an(undefined, ${datatype.label});`, (t) => {
		t.is(is.an(undefined, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.undef);

datatypes.all.remove(datatypes.nil);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(null, ${datatype.label});`, (t) => {
		t.is(is.a(null, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.nil);

datatypes.all.remove(datatypes.bool);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(Boolean, ${datatype.label});`, (t) => {
		t.is(is.a(Boolean, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.bool);

datatypes.all.remove(datatypes.string);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(String, ${datatype.label});`, (t) => {
		t.is(is.a(String, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.string);

datatypes.all.remove(datatypes.args);
datatypes.all.remove(datatypes.object);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • an(Object, ${datatype.label});`, (t) => {
		t.is(is.an(Object, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.args);
datatypes.all.add(datatypes.object);

datatypes.all.remove(datatypes.array);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • an(Array, ${datatype.label});`, (t) => {
		t.is(is.an(Array, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.array);

datatypes.all.remove(datatypes.callable);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(Function, ${datatype.label});`, (t) => {
		t.is(is.a(Function, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.callable);

datatypes.all.remove(datatypes.number);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(Number, ${datatype.label});`, (t) => {
		t.is(is.a(Number, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.number);

datatypes.all.remove(datatypes.regexp);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(RegExp, ${datatype.label});`, (t) => {
		t.is(is.a(RegExp, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.regexp);

datatypes.all.remove(datatypes.date);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • a(Date, ${datatype.label});`, (t) => {
		t.is(is.a(Date, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.date);

