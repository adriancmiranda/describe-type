import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import regexp from '../../../source/is/regexp';

test('describeType.is.regexp exposure', (t) => {
	t.is(toString.call(describeType.is.regexp), '[object Function]', 'should be a function');
});

test('regexp exposure', (t) => {
	t.is(toString.call(regexp), '[object Function]', 'should be a function');
});

datatypes.regexp.iterate(datatype => {
	test(`${datatype.id} • regexp(${datatype.label}); // true`, (t) => {
		t.is(regexp(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (regexp(datatype.value) === false) {
		test(`${datatype.id} • regexp(${datatype.label}); // false`, (t) => {
			t.is(regexp(datatype.value), false, 'should be false');
		});
	}
});
