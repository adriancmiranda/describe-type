import test from 'ava';
import * as datatypes from '../.fixtures/datatypes.fixture';
import * as describeType from '../index.next';
import jsonlike from './jsonlike.next';

test('describeType.is.jsonlike exposure', (t) => {
	t.is(toString.call(describeType.is.jsonlike), '[object Function]', 'should be a function');
});

test('jsonlike exposure', (t) => {
	t.is(toString.call(jsonlike), '[object Function]', 'should be a function');
});

datatypes.jsonlike.iterate((datatype, i) => {
	test(`${datatype.id} • jsonlike(${datatype.label}):true;`, (t) => {
		t.is(jsonlike(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate((datatype, i) => {
	test(`${datatype.id} • jsonlike(${datatype.label}):false;`, (t) => {
		t.is(jsonlike(datatype.value), false, 'should be false');
	});
});
