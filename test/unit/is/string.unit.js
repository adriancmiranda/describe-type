import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import string from '../../../source/is/string';

test('describeType.is.string exposure', (t) => {
	t.is(toString.call(describeType.is.string), '[object Function]', 'should be a function');
});

test('string exposure', (t) => {
	t.is(toString.call(string), '[object Function]', 'should be a function');
});

datatypes.string.iterate(datatype => {
	test(`${datatype.id} • string(${datatype.label});`, (t) => {
		t.is(string(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.string);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • string(${datatype.label});`, (t) => {
		t.is(string(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.string);
