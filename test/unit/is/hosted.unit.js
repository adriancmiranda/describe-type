import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import hosted from '../../../source/is/hosted';

test('describeType.is.hosted exposure', (t) => {
	t.is(toString.call(describeType.is.hosted), '[object Function]', 'should be a function');
});

test('hosted exposure', (t) => {
	t.is(toString.call(hosted), '[object Function]', 'should be a function');
});

datatypes.all.iterate(datatype => {
	if (datatype.value != null) {
		test(`${datatype.id} • hosted("foo", { foo: ${datatype.label} }); // true`, (t) => {
			t.is(hosted('foo', { foo: datatype.value }), true);
		});
	}
});

datatypes.primitive.iterate(datatype => {
	test(`${datatype.id} • hosted("foo", { foo: ${datatype.label} }); // true`, (t) => {
		t.is(hosted('foo', { foo: datatype.value }), false);
	});
});
