import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '../index.js';
import equal from '../../../is/equal';

test('describeType.is.equal exposure', (t) => {
	t.is(toString.call(describeType.is.equal), '[object Function]', 'should be a function');
});

test('equal exposure', (t) => {
	t.is(toString.call(equal), '[object Function]', 'should be a function');
});

datatypes.all.remove(datatypes.equal);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • equal(${datatype.label}, ${datatype.label}) // true`, (t) => {
		t.is(equal(datatype.value, datatype.value), true, 'should be true');
	});
});
datatypes.all.add(datatypes.equal);


let i = 0;
datatypes.all.add(datatypes.objectEvil);
const others = datatypes.all.extract(['label', 'value']).reverse();
datatypes.all.iterate(datatype => {
	const other = others[i];
	if (equal(datatype.value, other.value) === false) {
		test(`${datatype.id} • equal(${datatype.label}, ${other.label});`, (t) => {
			t.is(equal(datatype.value, other.value), false, 'should be false');
		});
	}
	i += 1;
});
datatypes.all.remove(datatypes.objectEvil);
