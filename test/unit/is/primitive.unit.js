import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#primitive', () => {
// 	it('O método "primitive" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.primitive), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.primitive.iterate(datatype => {
// 			it(`${datatype.id} • primitive(${datatype.label}); // true`, () => {
// 				t.is(is.primitive(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.primitive(datatype.value)) {
// 				it(`${datatype.id} • primitive(${datatype.label}); // false`, () => {
// 					t.is(is.primitive(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
