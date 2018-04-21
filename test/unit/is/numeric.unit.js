import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import numeric from '../../../source/is/numeric';

test('describeType.is.numeric exposure', (t) => {
	t.is(toString.call(describeType.is.numeric), '[object Function]', 'should be a function');
});

test('numeric exposure', (t) => {
	t.is(toString.call(numeric), '[object Function]', 'should be a function');
});

datatypes.numeric.iterate(datatype => {
	test(`${datatype.id} • numeric(${datatype.label});`, (t) => {
		t.is(numeric(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.nan);
datatypes.all.remove(datatypes.infinity);
datatypes.all.remove(datatypes.decimal);
datatypes.all.remove(datatypes.number);
datatypes.all.remove(datatypes.bool);
datatypes.all.remove(datatypes.arraylikeNative);
datatypes.all.remove(datatypes.arrayFilled);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • numeric(${datatype.label});`, (t) => {
		t.is(numeric(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.nan);
datatypes.all.add(datatypes.infinity);
datatypes.all.add(datatypes.decimal);
datatypes.all.add(datatypes.number);
datatypes.all.add(datatypes.bool);
datatypes.all.add(datatypes.arraylikeNative);
datatypes.all.add(datatypes.arrayFilled);