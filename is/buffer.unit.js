import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.js';
import buffer from '../../../is/buffer';

test('describeType.is.buffer exposure', (t) => {
	t.is(toString.call(describeType.is.buffer), '[object Function]', 'should be a function');
});

test('buffer exposure', (t) => {
	t.is(toString.call(buffer), '[object Function]', 'should be a function');
});
