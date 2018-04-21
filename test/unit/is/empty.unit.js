import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#empty', () => {
// 	test('true', () => {
// 		datatypes.empty.iterate(datatype => {
// 			it(`${datatype.id} • empty(${datatype.label}); // true`, () => {
// 				t.is(is.empty(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.filled.iterate(datatype => {
// 			it(`${datatype.id} • empty(${datatype.label}); // false`, () => {
// 				t.is(is.empty(datatype.value), false);
// 			});
// 		});
// 	});
// });
