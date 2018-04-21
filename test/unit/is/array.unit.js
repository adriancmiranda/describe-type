import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import array from '../../../source/is/array';

test('describeType.is.array exposure', (t) => {
	t.is(toString.call(describeType.is.array), '[object Function]', 'should be a function');
});

test('array exposure', (t) => {
	t.is(toString.call(array), '[object Function]', 'should be a function');
});

datatypes.array.iterate(datatype => {
	test(`${datatype.id} • array(${datatype.label}); // true`, (t) => {
		t.is(array(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (array(datatype.value) === false) {
		test(`${datatype.id} • array(${datatype.label}); // false`, (t) => {
			t.is(array(datatype.value), false, 'should be false');
		});
	}
});