import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.next.js';
import number from './number.next';

test('describeType.is.number exposure', t => {
	t.is(toString.call(describeType.is.number), '[object Function]', 'should be a function');
});

test('number exposure', t => {
	t.is(toString.call(number), '[object Function]', 'should be a function');
});

datatypes.number.iterate(datatype => {
	test(`${datatype.id} • number(${datatype.label});`, t => {
		t.is(number(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (number(datatype.value) === false) {
		test(`${datatype.id} • number(${datatype.label});`, t => {
			t.is(number(datatype.value), false, 'should be false');
		});
	}
});
