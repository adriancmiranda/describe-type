import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture';
import * as describeType from '../../index.next';
import stream from './stream.next';

test('describeType.is.stream exposure', (t) => {
	t.is(toString.call(describeType.is.stream), '[object Function]', 'should be a function');
	t.is(toString.call(describeType.is.stream.writable), '[object Function]', 'should be a function');
	t.is(toString.call(describeType.is.stream.readable), '[object Function]', 'should be a function');
	t.is(toString.call(describeType.is.stream.duplex), '[object Function]', 'should be a function');
	t.is(toString.call(describeType.is.stream.transform), '[object Function]', 'should be a function');
});

test('stream exposure', (t) => {
	t.is(toString.call(stream), '[object Function]', 'should be a function');
});

test('stream.writable exposure', (t) => {
	t.is(toString.call(stream.writable), '[object Function]', 'should be a function');
});

test('stream.readable exposure', (t) => {
	t.is(toString.call(stream.readable), '[object Function]', 'should be a function');
});

test('stream.duplex exposure', (t) => {
	t.is(toString.call(stream.duplex), '[object Function]', 'should be a function');
});

test('stream.transform exposure', (t) => {
	t.is(toString.call(stream.transform), '[object Function]', 'should be a function');
});

datatypes.stream.iterate((datatype) => {
	test(`${datatype.id} • stream(${datatype.label});`, (t) => {
		t.is(stream(datatype.value), true, 'should be true');
	});
});

datatypes.streamWritable.add(datatypes.streamPassThrough);
datatypes.streamWritable.add(datatypes.streamTransform);
datatypes.streamWritable.add(datatypes.streamDuplex);
datatypes.streamWritable.iterate((datatype) => {
	test(`${datatype.id} • stream.writable(${datatype.label});`, (t) => {
		t.is(stream.writable(datatype.value), true, 'should be true');
	});
});
datatypes.streamWritable.remove(datatypes.streamPassThrough);
datatypes.streamWritable.remove(datatypes.streamTransform);
datatypes.streamWritable.remove(datatypes.streamDuplex);

datatypes.streamReadable.add(datatypes.streamPassThrough);
datatypes.streamReadable.add(datatypes.streamTransform);
datatypes.streamReadable.add(datatypes.streamDuplex);
datatypes.streamReadable.iterate((datatype) => {
	test(`${datatype.id} • stream.readable(${datatype.label});`, (t) => {
		t.is(stream.readable(datatype.value), true, 'should be true');
	});
});
datatypes.streamReadable.remove(datatypes.streamPassThrough);
datatypes.streamReadable.remove(datatypes.streamTransform);
datatypes.streamReadable.remove(datatypes.streamDuplex);

datatypes.streamDuplex.add(datatypes.streamPassThrough);
datatypes.streamDuplex.add(datatypes.streamTransform);
datatypes.streamDuplex.iterate((datatype) => {
	test(`${datatype.id} • stream.duplex(${datatype.label});`, (t) => {
		t.is(stream.duplex(datatype.value), true, 'should be true');
	});
});
datatypes.streamDuplex.remove(datatypes.streamPassThrough);
datatypes.streamDuplex.remove(datatypes.streamTransform);

datatypes.streamTransform.add(datatypes.streamPassThrough);
datatypes.streamTransform.iterate((datatype) => {
	test(`${datatype.id} • stream.transform(${datatype.label});`, (t) => {
		t.is(stream.transform(datatype.value), true, 'should be true');
	});
});
datatypes.streamTransform.remove(datatypes.streamPassThrough);

datatypes.all.remove(datatypes.stream);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • stream(${datatype.label});`, (t) => {
		t.is(stream(datatype.value), false, 'should be false');
	});
	test(`${datatype.id} • stream.writable(${datatype.label});`, (t) => {
		t.is(stream.writable(datatype.value), false, 'should be false');
	});
	test(`${datatype.id} • stream.readable(${datatype.label});`, (t) => {
		t.is(stream.readable(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.stream);
