import test from 'ava';
import * as describeType from '..';
import asInstanceOf from './as.instanceOf';

test('describeType.as.instanceOf method is exposed', (t) => {
	t.is(toString.call(describeType.as), '[object Function]', 'should be a function');
});

test('asInstanceOf method is exposed', (t) => {
	t.is(toString.call(asInstanceOf), '[object Function]', 'should be a function');
});
