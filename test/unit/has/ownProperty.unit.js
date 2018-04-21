import test from 'ava';
import ownProperty from '../../../source/has/ownProperty.js';

test('ownProperty exposed', (t) => {
	t.is(toString.call(ownProperty), '[object Function]');
});
