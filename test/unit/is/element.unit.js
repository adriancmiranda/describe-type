import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#element', () => {
// 	it('O método "element" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.element), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.element.iterate(datatype => {
// 			it(`${datatype.id} • element(${datatype.label}); // true`, () => {
// 				t.is(is.element(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.element);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • element(${datatype.label}); // false`, () => {
// 				t.is(is.element(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.element);
// 	});
// });

