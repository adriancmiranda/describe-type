import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#exotic', () => {
// 	it('O método "exotic" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.exotic), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.primitive(datatype.value)) {
// 				it(`${datatype.id} • exotic(${datatype.label}); // true`, () => {
// 					t.is(is.exotic(datatype.value), true);
// 				});
// 			}
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.primitive.iterate(datatype => {
// 			it(`${datatype.id} • exotic(${datatype.label}); // false`, () => {
// 				t.is(is.exotic(datatype.value), false);
// 			});
// 		});
// 	});
// });
