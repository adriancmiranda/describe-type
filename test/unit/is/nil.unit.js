import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#nil', () => {
// 	it('O método "nil" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.nil), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.nil.iterate(datatype => {
// 			it(`${datatype.id} • nil(${datatype.label}); // true`, () => {
// 				t.is(is.nil(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.nil(datatype.value)) {
// 				it(`${datatype.id} • nil(${datatype.label}); // false`, () => {
// 					t.is(is.nil(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
