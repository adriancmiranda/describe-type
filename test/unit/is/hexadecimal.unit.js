import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#hexadecimal', () => {
// 	it('O método "hexadecimal" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.hexadecimal), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.hexadecimal.iterate(datatype => {
// 			it(`${datatype.id} • hexadecimal(${datatype.label}); // true`, () => {
// 				t.is(is.hexadecimal(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.string);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • hexadecimal(${datatype.label}); // false`, () => {
// 				t.is(is.hexadecimal(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.string);
// 	});
// });
