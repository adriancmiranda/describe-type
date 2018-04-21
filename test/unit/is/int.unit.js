import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#int', () => {
// 	it('O método "int" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.int), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.int.add(datatypes.zero);
// 		datatypes.int.iterate(datatype => {
// 			it(`${datatype.id} • int(${datatype.label}); // true`, () => {
// 				t.is(is.int(datatype.value), true);
// 			});
// 		});
// 		datatypes.int.remove(datatypes.zero);
// 	});

// 	test('false', () => {
// 		datatypes.decimal.iterate(datatype => {
// 			it(`${datatype.id} • int(${datatype.label}); // true`, () => {
// 				t.is(is.int(datatype.value), false);
// 			});
// 		});
// 	});
// });
