import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import arraylike from '../../../source/is/arraylike';

test('describeType.is.arraylike exposure', (t) => {
	t.is(toString.call(describeType.is.arraylike), '[object Function]', 'should be a function');
});

test('arraylike exposure', (t) => {
	t.is(toString.call(arraylike), '[object Function]', 'should be a function');
});

// 		datatypes.arraylike.iterate(datatype => {
// 			test(`${datatype.id} • arraylike(${datatype.label}); // true`, (t) => {
// 				t.is(arraylike(datatype.value), true, 'should be true');
// 			});
// 		});

// 		datatypes.notArraylike.iterate(datatype => {
// 			test(`${datatype.id} • arraylike(${datatype.label}); // false`, (t) => {
// 				t.is(arraylike(datatype.value), false, 'should be false');
// 			});
// 		});
