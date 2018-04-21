import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import nan from '../../../source/is/nan';

test('describeType.is.nan exposure', (t) => {
	t.is(toString.call(describeType.is.nan), '[object Function]', 'should be a function');
});

test('nan exposure', (t) => {
	t.is(toString.call(nan), '[object Function]', 'should be a function');
});

// 		datatypes.hex.iterate(datatype => {
// 			test(`${datatype.id} • hex(${datatype.label}); // true`, (t) => {
// 				t.is(hex(datatype.value), true, 'should be true');
// 			});
// 		});

// 		datatypes.all.remove(datatypes.string);
// 		datatypes.all.iterate(datatype => {
// 			test(`${datatype.id} • hex(${datatype.label}); // false`, (t) => {
// 				t.is(hex(datatype.value), false, 'should be false');
// 			});
// 		});
// 		datatypes.all.add(datatypes.string);
