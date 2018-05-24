import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.next.js';
import hosted from './hosted.next';
import exotic from './exotic.next';

test('describeType.is.hosted exposure', t => {
	t.is(toString.call(describeType.is.hosted), '[object Function]', 'should be a function');
});

test('hosted exposure', t => {
	t.is(toString.call(hosted), '[object Function]', 'should be a function');
});

datatypes.all.iterate(datatype => {
	if (exotic(datatype.value)) {
		test(`${datatype.id} • hosted("foo", { foo: ${datatype.label} });`, t => {
			t.is(hosted('bar', { bar: datatype.value }), true);
		});
	}
});

datatypes.primitive.iterate(datatype => {
	test(`${datatype.id} • hosted("foo", { foo: ${datatype.label} });`, t => {
		t.is(hosted('foo', { foo: datatype.value }), false);
	});
});
