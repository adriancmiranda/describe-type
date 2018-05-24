import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.next.js';
import jsonlike from './jsonlike.next';

test('describeType.is.jsonlike exposure', t => {
	t.is(toString.call(describeType.is.jsonlike), '[object Function]', 'should be a function');
});

test('jsonlike exposure', t => {
	t.is(toString.call(jsonlike), '[object Function]', 'should be a function');
});

datatypes.jsonlike.iterate(datatype => {
	test(`jsonlike(${datatype.label});`, t => {
		t.is(jsonlike(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	test(`jsonlike(${datatype.label});`, t => {
		t.is(jsonlike(datatype.value), false, 'should be false');
	});
});
