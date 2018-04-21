import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import date from '../../../source/is/date';

test('describeType.is.date exposure', (t) => {
	t.is(toString.call(describeType.is.date), '[object Function]', 'should be a function');
});

test('date exposure', (t) => {
	t.is(toString.call(date), '[object Function]', 'should be a function');
});

// 		datatypes.date.iterate(datatype => {
// 			test(`${datatype.id} • date(${datatype.label}); // true`, (t) => {
// 				t.is(date(datatype.value), true, 'should be true');
// 			});
// 		});

// 		datatypes.all.iterate(datatype => {
// 			if (!is.date(datatype.value)) {
// 				test(`${datatype.id} • date(${datatype.label}); // false`, (t) => {
// 					t.is(date(datatype.value), false, 'should be false');
// 				});
// 			}
// 		});
