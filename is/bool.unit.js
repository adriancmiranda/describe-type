import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.js';
import bool from '../../../is/bool';

test('describeType.is.bool exposure', (t) => {
	t.is(toString.call(describeType.is.bool), '[object Function]', 'should be a function');
});

test('bool exposure', (t) => {
	t.is(toString.call(bool), '[object Function]', 'should be a function');
});

datatypes.bool.iterate(datatype => {
	test(`${datatype.id} • bool(${datatype.label});`, (t) => {
		t.is(bool(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (bool(datatype.value) === false) {
		test(`${datatype.id} • bool(${datatype.label});`, (t) => {
			t.is(bool(datatype.value), false, 'should be false');
		});
	}
});
