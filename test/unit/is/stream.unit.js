import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import stream from '../../../source/is/stream';

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
	t.is(stream.writable, '[object Function]', 'should be a function');
});

test('stream.readable exposure', (t) => {
	t.is(stream.readable, '[object Function]', 'should be a function');
});

test('stream.duplex exposure', (t) => {
	t.is(stream.duplex, '[object Function]', 'should be a function');
});

test('stream.transform exposure', (t) => {
	t.is(stream.transform, '[object Function]', 'should be a function');
});
