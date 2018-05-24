import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../../index.next';
import arraylike from './arraylike.next';

test('describeType.is.arraylike exposure', t => {
	t.is(toString.call(describeType.is.arraylike), '[object Function]', 'should be a function');
});

test('arraylike exposure', t => {
	t.is(toString.call(arraylike), '[object Function]', 'should be a function');
});

datatypes.arraylike.iterate(datatype => {
	test(`${datatype.id} • arraylike(${datatype.label});`, t => {
		t.is(arraylike(datatype.value), true, 'should be true');
	});
});

datatypes.notArraylike.iterate(datatype => {
	test(`${datatype.id} • arraylike(${datatype.label});`, t => {
		t.is(arraylike(datatype.value), false, `"${datatype.label}" shouldn't be an arraylike`);
	});
});
