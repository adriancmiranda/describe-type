import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#hex', () => {
// 	it('O método "hex" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.hex), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.hex.iterate(datatype => {
// 			it(`${datatype.id} • hex(${datatype.label}); // true`, () => {
// 				t.is(is.hex(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.string);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • hex(${datatype.label}); // false`, () => {
// 				t.is(is.hex(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.string);
// 	});
// });
