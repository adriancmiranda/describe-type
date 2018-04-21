import test from 'ava';
import * as describeType from '../../../source';
import at from '../../../source/has/at';

test('describeType.has.at exposure', (t) => {
	t.is(toString.call(describeType.has.at), '[object Function]', 'should be a function');
});

test('at exposure', (t) => {
	t.is(toString.call(at), '[object Function]', 'should be a function');
});
