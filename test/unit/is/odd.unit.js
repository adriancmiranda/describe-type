import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#odd', () => {
// 	it('O método "odd" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.odd), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.odd.iterate(datatype => {
// 			it(`${datatype.id} • odd(${datatype.label}); // true`, () => {
// 				t.is(is.odd(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.infinity);
// 		datatypes.all.remove(datatypes.decimal);
// 		datatypes.all.remove(datatypes.number);
// 		datatypes.all.add(datatypes.even);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • odd(${datatype.label}); // false`, () => {
// 				t.is(is.odd(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.infinity);
// 		datatypes.all.add(datatypes.decimal);
// 		datatypes.all.add(datatypes.number);
// 		datatypes.all.remove(datatypes.even);
// 	});
// });
