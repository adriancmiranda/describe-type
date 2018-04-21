import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import number from '../../../source/is/number';

test('describeType.is.number exposure', (t) => {
	t.is(toString.call(describeType.is.number), '[object Function]', 'should be a function');
});

test('number exposure', (t) => {
	t.is(toString.call(number), '[object Function]', 'should be a function');
});

// 		datatypes.number.iterate(datatype => {
// 			test(`${datatype.id} • number(${datatype.label}); // true`, (t) => {
// 				t.is(number(datatype.value), true, 'should be true');
// 			});
// 		});

// 		datatypes.all.iterate(datatype => {
// 			if (!is.number(datatype.value)) {
// 				test(`${datatype.id} • number(${datatype.label}); // false`, (t) => {
// 					t.is(number(datatype.value), false, 'should be false');
// 				});
// 			}
// 		});
