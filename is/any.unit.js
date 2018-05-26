import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import any from './any.next';

test('describeType.is.any exposure', (t) => {
	t.is(toString.call(describeType.is.any), '[object Function]', 'should be a function');
});

test('any exposure', (t) => {
	t.is(toString.call(any), '[object Function]', 'should be a function');
});

const errorCtors = datatypes.error.extract('ctor');
const errorNames = datatypes.error.extract('name');
datatypes.error.iterate((datatype) => {
	test(`${datatype.id} • any([${errorNames}], ${datatype.label});`, (t) => {
		t.is(any(errorCtors, datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.error);
datatypes.all.iterate((datatype) => {
	test(`${datatype.id} • any([${errorNames}], ${datatype.label});`, (t) => {
		t.is(any(errorCtors, datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.error);
