import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.next.js';
import buffer from './buffer.next';

test('describeType.is.buffer exposure', t => {
	t.is(toString.call(describeType.is.buffer), '[object Function]', 'should be a function');
});

test('buffer exposure', t => {
	t.is(toString.call(buffer), '[object Function]', 'should be a function');
});
