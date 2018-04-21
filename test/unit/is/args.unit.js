import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#args', () => {
// 	it('O método "args" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.args), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.args.iterate(datatype => {
// 			it(`${datatype.id} • args(${datatype.label}); // true`, () => {
// 				t.is(is.args(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.add(datatypes.arraylikeObject);
// 		datatypes.all.add(datatypes.arraylikeNative);
// 		datatypes.all.remove(datatypes.args);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • args(${datatype.label}); // false`, () => {
// 				t.is(is.args(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.remove(datatypes.arraylikeObject);
// 		datatypes.all.remove(datatypes.arraylikeNative);
// 		datatypes.all.add(datatypes.args);
// 	});
// });

