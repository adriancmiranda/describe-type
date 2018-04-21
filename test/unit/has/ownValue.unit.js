import test from 'ava';
import * as describeType from '../../../source';
import ownValue from '../../../source/has/ownValue';

test('describeType.has.ownValue exposure', (t) => {
	t.is(toString.call(describeType.has.ownValue), '[object Function]', 'should be a function');
});

test('ownValue exposure', (t) => {
	t.is(toString.call(ownValue), '[object Function]', 'should be a function');
});
