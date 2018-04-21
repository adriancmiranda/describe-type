import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#error', () => {
// 	it('O método "error" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.error), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.error.iterate(datatype => {
// 			it(`${datatype.id} • error(${datatype.label}); // true`, () => {
// 				t.is(is.error(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.error(datatype.value)) {
// 				it(`${datatype.id} • error(${datatype.label}); // false`, () => {
// 					t.is(is.error(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
