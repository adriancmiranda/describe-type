import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#array', () => {
// 	it('O método "array" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.array), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.array.iterate(datatype => {
// 			it(`${datatype.id} • array(${datatype.label}); // true`, () => {
// 				t.is(is.array(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.array(datatype.value)) {
// 				it(`${datatype.id} • array(${datatype.label}); // false`, () => {
// 					t.is(is.array(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
