import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.js';
import base64 from '../../../is/base64';

test('describeType.is.base64 exposure', (t) => {
	t.is(toString.call(describeType.is.base64), '[object Function]', 'should be a function');
});

test('base64 exposure', (t) => {
	t.is(toString.call(base64), '[object Function]', 'should be a function');
});

datatypes.base64.iterate(datatype => {
	test(`${datatype.id} • base64(${datatype.label});`, (t) => {
		t.is(base64(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.string);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • base64(${datatype.label});`, (t) => {
		t.is(base64(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.string);
