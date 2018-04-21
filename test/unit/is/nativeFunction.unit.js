import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import nativeFunction from '../../../source/is/nativeFunction';

test('describeType.is.nativeFunction exposure', (t) => {
	t.is(toString.call(describeType.is.nativeFunction), '[object Function]', 'should be a function');
});

test('nativeFunction exposure', (t) => {
	t.is(toString.call(nativeFunction), '[object Function]', 'should be a function');
});

datatypes.nativeFunction.iterate(datatype => {
	test(`${datatype.id} • nativeFunction(${datatype.label});`, (t) => {
		t.is(nativeFunction(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	test(`${datatype.id} • nativeFunction(${datatype.label});`, (t) => {
		t.is(nativeFunction(datatype.value), false, 'should be false');
	});
});
