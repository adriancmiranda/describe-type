import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#object', () => {
// 	it('O método "object" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.object), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.object.iterate(datatype => {
// 			it(`${datatype.id} • object(${datatype.label}); // true`, () => {
// 				t.is(is.object(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.object(datatype.value)) {
// 				it(`${datatype.id} • object(${datatype.label}); // false`, () => {
// 					t.is(is.object(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
