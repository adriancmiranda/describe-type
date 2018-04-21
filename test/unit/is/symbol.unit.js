import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#symbol', () => {
// 	it('O método "symbol" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.symbol), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.symbol.iterate(datatype => {
// 			it(`${datatype.id} • symbol(${datatype.label}); // true`, () => {
// 				t.is(is.symbol(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.symbol);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • symbol(${datatype.label}); // false`, () => {
// 				t.is(is.symbol(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.symbol);
// 	});
// });
