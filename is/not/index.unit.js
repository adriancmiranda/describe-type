import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as describeType from '../../index.next';
import not from './index.next';

test('describeType.is.not exposure', (t) => {
	t.is(toString.call(describeType.is.not), '[object Function]', 'should be a function');
});

test('not exposure', (t) => {
	t.is(toString.call(not), '[object Function]', 'should be a function');
});

datatypes.all.remove(datatypes.undef);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(undefined, ${datatype.label});`, (t) => {
		t.is(not(undefined, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.undef);

datatypes.all.remove(datatypes.nil);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(null, ${datatype.label});`, (t) => {
		t.is(not(null, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.nil);

datatypes.all.remove(datatypes.bool);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(Boolean, ${datatype.label});`, (t) => {
		t.is(not(Boolean, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.bool);

datatypes.all.remove(datatypes.string);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(String, ${datatype.label});`, (t) => {
		t.is(not(String, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.string);

datatypes.all.remove(datatypes.args);
datatypes.all.remove(datatypes.object);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(Object, ${datatype.label});`, (t) => {
		t.is(not(Object, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.object);

datatypes.all.remove(datatypes.array);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(Array, ${datatype.label});`, (t) => {
		t.is(not(Array, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.array);

datatypes.all.remove(datatypes.callable);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(Function, ${datatype.label});`, (t) => {
		t.is(not(Function, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.callable);

datatypes.all.remove(datatypes.number);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(Number, ${datatype.label});`, (t) => {
		t.is(not(Number, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.number);

datatypes.all.remove(datatypes.regexp);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(RegExp, ${datatype.label});`, (t) => {
		t.is(not(RegExp, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.regexp);

datatypes.all.remove(datatypes.date);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • not(Date, ${datatype.label});`, (t) => {
		t.is(not(Date, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.date);

