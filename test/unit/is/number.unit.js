import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#number', () => {
// 	it('O método "number" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.number), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.number.iterate(datatype => {
// 			it(`${datatype.id} • number(${datatype.label}); // true`, () => {
// 				t.is(is.number(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.number(datatype.value)) {
// 				it(`${datatype.id} • number(${datatype.label}); // false`, () => {
// 					t.is(is.number(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
