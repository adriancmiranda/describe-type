import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import exotic from '../../../source/is/exotic';

test('describeType.is.exotic exposure', (t) => {
	t.is(toString.call(describeType.is.exotic), '[object Function]', 'should be a function');
});

test('exotic exposure', (t) => {
	t.is(toString.call(exotic), '[object Function]', 'should be a function');
});

datatypes.all.iterate(datatype => {
	if (datatype.value != null) {
		test(`${datatype.id} • exotic(${datatype.label}); // true`, (t) => {
			t.is(exotic(datatype.value), true, 'should be true');
		});
	}
});

datatypes.primitive.iterate(datatype => {
	test(`${datatype.id} • exotic(${datatype.label}); // false`, (t) => {
		t.is(exotic(datatype.value), false, 'should be false');
	});
});
