import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.js';
import element from '../../../is/element';

test('describeType.is.element exposure', (t) => {
	t.is(toString.call(describeType.is.element), '[object Function]', 'should be a function');
});

test('element exposure', (t) => {
	t.is(toString.call(element), '[object Function]', 'should be a function');
});

datatypes.element.iterate(datatype => {
	test(`${datatype.id} • element(${datatype.label});`, (t) => {
		t.is(element(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.element);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • element(${datatype.label});`, (t) => {
		t.is(element(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.element);
