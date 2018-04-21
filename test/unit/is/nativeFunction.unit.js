import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#nativeFunction', () => {
// 	it('O método "nativeFunction" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.nativeFunction), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.nativeFunction.iterate(datatype => {
// 			it(`${datatype.id} • nativeFunction(${datatype.label}); // true`, () => {
// 				t.is(is.nativeFunction(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • nativeFunction(${datatype.label}); // false`, () => {
// 				t.is(is.nativeFunction(datatype.value), false);
// 			});
// 		});
// 	});
// });
