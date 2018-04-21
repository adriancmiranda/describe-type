import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#base64', () => {
// 	it('O método "base64" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.base64), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.base64.iterate(datatype => {
// 			it(`${datatype.id} • base64(${datatype.label}); // true`, () => {
// 				t.is(is.base64(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.string);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • base64(${datatype.label}); // false`, () => {
// 				t.is(is.base64(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.string);
// 	});
// });
