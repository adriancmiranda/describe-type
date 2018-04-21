import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import primitive from '../../../source/is/primitive';

test('describeType.is.primitive exposure', (t) => {
	t.is(toString.call(describeType.is.primitive), '[object Function]', 'should be a function');
});

test('primitive exposure', (t) => {
	t.is(toString.call(primitive), '[object Function]', 'should be a function');
});

datatypes.primitive.iterate(datatype => {
	test(`${datatype.id} • primitive(${datatype.label}); // true`, (t) => {
		t.is(primitive(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (primitive(datatype.value) === false) {
		test(`${datatype.id} • primitive(${datatype.label}); // false`, (t) => {
			t.is(primitive(datatype.value), false, 'should be false');
		});
	}
});
