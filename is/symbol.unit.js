import test from 'ava';
import * as datatypes from '../../.fixtures/datatypes.fixture.js';
import * as describeType from '..';
import symbol from '../../../is/symbol';

test('describeType.is.symbol exposure', (t) => {
	t.is(toString.call(describeType.is.symbol), '[object Function]', 'should be a function');
});

test('symbol exposure', (t) => {
	t.is(toString.call(symbol), '[object Function]', 'should be a function');
});

datatypes.symbol.iterate(datatype => {
	test(`${datatype.id} • symbol(${datatype.label});`, (t) => {
		t.is(symbol(datatype.value), true, 'should be true');
	});
});

datatypes.all.remove(datatypes.symbol);
datatypes.all.iterate(datatype => {
	test(`${datatype.id} • symbol(${datatype.label});`, (t) => {
		t.is(symbol(datatype.value), false, 'should be false');
	});
});
datatypes.all.add(datatypes.symbol);
