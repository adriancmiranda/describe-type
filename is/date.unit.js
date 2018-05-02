import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.js';
import date from '../../../is/date';

test('describeType.is.date exposure', (t) => {
	t.is(toString.call(describeType.is.date), '[object Function]', 'should be a function');
});

test('date exposure', (t) => {
	t.is(toString.call(date), '[object Function]', 'should be a function');
});

datatypes.date.iterate(datatype => {
	test(`${datatype.id} • date(${datatype.label});`, (t) => {
		t.is(date(datatype.value), true, 'should be true');
	});
});

datatypes.all.iterate(datatype => {
	if (date(datatype.value) === false) {
		test(`${datatype.id} • date(${datatype.label});`, (t) => {
			t.is(date(datatype.value), false, 'should be false');
		});
	}
});
