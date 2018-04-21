import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import error from '../../../source/is/error';

test('describeType.is.error exposure', (t) => {
	t.is(toString.call(describeType.is.error), '[object Function]', 'should be a function');
});

test('error exposure', (t) => {
	t.is(toString.call(error), '[object Function]', 'should be a function');
});

datatypes.error.iterate(datatype => {
	test(`${datatype.id} • error(${datatype.label}); // true`, (t) => {
		t.is(error(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (error(datatype.value) === false) {
		test(`${datatype.id} • error(${datatype.label}); // false`, (t) => {
			t.is(error(datatype.value), false, 'should be false');
		});
	}
});
