import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#bool', () => {
// 	it('O método "bool" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.bool), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.bool.iterate(datatype => {
// 			it(`${datatype.id} • bool(${datatype.label}); // true`, () => {
// 				t.is(is.bool(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.bool(datatype.value)) {
// 				it(`${datatype.id} • bool(${datatype.label}); // false`, () => {
// 					t.is(is.bool(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
