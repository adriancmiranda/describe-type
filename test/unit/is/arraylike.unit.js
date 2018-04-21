import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#arraylike', () => {
// 	it('O método "arraylike" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.arraylike), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.arraylike.iterate(datatype => {
// 			it(`${datatype.id} • arraylike(${datatype.label}); // true`, () => {
// 				t.is(is.arraylike(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.notArraylike.iterate(datatype => {
// 			it(`${datatype.id} • arraylike(${datatype.label}); // false`, () => {
// 				t.is(is.arraylike(datatype.value), false);
// 			});
// 		});
// 	});
// });

