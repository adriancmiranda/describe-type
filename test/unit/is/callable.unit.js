import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#callable', () => {
// 	it('O método "callable" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.callable), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.callable.iterate(datatype => {
// 			it(`${datatype.id} • callable(${datatype.label}); // true`, () => {
// 				t.is(is.callable(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.callable(datatype.value)) {
// 				it(`${datatype.id} • callable(${datatype.label}); // false`, () => {
// 					t.is(is.callable(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
