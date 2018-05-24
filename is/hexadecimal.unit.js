import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.next.js';
import hexadecimal from './hexadecimal.next';

test('describeType.is.hexadecimal exposure', t => {
	t.is(toString.call(describeType.is.hexadecimal), '[object Function]', 'should be a function');
});

test('hexadecimal exposure', t => {
	t.is(toString.call(hexadecimal), '[object Function]', 'should be a function');
});

datatypes.hexadecimal.iterate(datatype => {
	test(`${datatype.id} • hexadecimal(${datatype.label});`, t => {
		t.is(hexadecimal(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.string);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • hexadecimal(${datatype.label});`, t => {
		t.is(hexadecimal(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.string);
