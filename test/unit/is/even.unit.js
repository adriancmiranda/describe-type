import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import even from '../../../source/is/even';

test('describeType.is.even exposure', (t) => {
	t.is(toString.call(describeType.is.even), '[object Function]', 'should be a function');
});

test('even exposure', (t) => {
	t.is(toString.call(even), '[object Function]', 'should be a function');
});

// 		datatypes.even.iterate(datatype => {
// 			test(`${datatype.id} • even(${datatype.label}); // true`, (t) => {
// 				t.is(even(datatype.value), true, 'should be true');
// 			});
// 		});

// 		datatypes.all.remove(datatypes.number);
// 		datatypes.all.add(datatypes.odd);
// 		datatypes.all.iterate(datatype => {
// 			test(`${datatype.id} • even(${datatype.label}); // false`, (t) => {
// 				t.is(even(datatype.value), false, 'should be false');
// 			});
// 		});
// 		datatypes.all.add(datatypes.number);
// 		datatypes.all.remove(datatypes.odd);
