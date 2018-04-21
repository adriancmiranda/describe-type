import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#uint', () => {
// 	it('O método "uint" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.uint), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.uint.add(datatypes.zeroPositiveInteger);
// 		datatypes.uint.iterate(datatype => {
// 			it(`${datatype.id} • uint(${datatype.label}); // true`, () => {
// 				t.is(is.uint(datatype.value), true);
// 			});
// 		});
// 		datatypes.uint.remove(datatypes.zeroPositiveInteger);
// 	});

// 	test('false', () => {
// 		datatypes.decimal.iterate(datatype => {
// 			it(`${datatype.id} • uint(${datatype.label}); // false`, () => {
// 				t.is(is.uint(datatype.value), false);
// 			});
// 		});
// 	});
// });
