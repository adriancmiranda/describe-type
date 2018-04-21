import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#undef', () => {
// 	it('O método "undef" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.undef), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.undef.iterate(datatype => {
// 			it(`${datatype.id} • undef(${datatype.label}); // true`, () => {
// 				t.is(is.undef(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.undef(datatype.value)) {
// 				it(`${datatype.id} • undef(${datatype.label}); // false`, () => {
// 					t.is(is.undef(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
