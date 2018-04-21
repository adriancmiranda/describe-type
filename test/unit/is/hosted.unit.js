import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#hosted', () => {
// 	it('O método "hosted" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.hosted), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.primitive(datatype.value)) {
// 				it(`${datatype.id} • hosted("foo", { foo: ${datatype.label} }); // true`, () => {
// 					t.is(is.hosted('foo', { foo: datatype.value }), true);
// 				});
// 			}
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.primitive.iterate(datatype => {
// 			it(`${datatype.id} • hosted("foo", { foo: ${datatype.label} }); // true`, () => {
// 				t.is(is.hosted('foo', { foo: datatype.value }), false);
// 			});
// 		});
// 	});
// });
