import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import odd from '../../../source/is/odd';

test('describeType.is.odd exposure', (t) => {
	t.is(toString.call(describeType.is.odd), '[object Function]', 'should be a function');
});

test('odd exposure', (t) => {
	t.is(toString.call(odd), '[object Function]', 'should be a function');
});

datatypes.odd.iterate(datatype => {
	test(`${datatype.id} • odd(${datatype.label}); // true`, (t) => {
		t.is(odd(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.infinity);
datatypes.all.remove(datatypes.decimal);
datatypes.all.remove(datatypes.number);
datatypes.all.add(datatypes.even);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • odd(${datatype.label}); // false`, (t) => {
		t.is(odd(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.infinity);
datatypes.all.add(datatypes.decimal);
datatypes.all.add(datatypes.number);
datatypes.all.remove(datatypes.even);
