import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import args from '../../../source/is/args';

test('describeType.is.args exposure', (t) => {
	t.is(toString.call(describeType.is.args), '[object Function]', 'should be a function');
});

test('args exposure', (t) => {
	t.is(toString.call(args), '[object Function]', 'should be a function');
});

datatypes.args.iterate(datatype => {
	test(`${datatype.id} • args(${datatype.label});`, (t) => {
		t.is(args(datatype.value), true, 'should be true');
	});
});

datatypes.all.add(datatypes.arraylikeObject);
datatypes.all.add(datatypes.arraylikeNative);
datatypes.all.remove(datatypes.args);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • args(${datatype.label});`, (t) => {
		t.is(args(datatype.value), false, 'should be false');
	});
});
datatypes.all.remove(datatypes.arraylikeObject);
datatypes.all.remove(datatypes.arraylikeNative);
datatypes.all.add(datatypes.args);
