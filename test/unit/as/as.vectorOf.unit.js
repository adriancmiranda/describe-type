import test from 'ava';
import * as describeType from '../../../source';
import as from '../../../source/as/index.js';

test('as.vectorOf method is exposed', (t) => {
	t.is(toString.call(describeType.as.vectorOf), '[object Function]', 'should be a function');;
});