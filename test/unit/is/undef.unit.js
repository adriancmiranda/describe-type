import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import undef from '../../../source/is/undef';

test('describeType.is.undef exposure', (t) => {
	t.is(toString.call(describeType.is.undef), '[object Function]', 'should be a function');
});

test('undef exposure', (t) => {
	t.is(toString.call(undef), '[object Function]', 'should be a function');
});

datatypes.undef.iterate(datatype => {
	test(`${datatype.id} • undef(${datatype.label}); // true`, (t) => {
		t.is(undef(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (undef(datatype.value) === false) {
		test(`${datatype.id} • undef(${datatype.label}); // false`, (t) => {
			t.is(undef(datatype.value), false, 'should be a false');
		});
	}
});
