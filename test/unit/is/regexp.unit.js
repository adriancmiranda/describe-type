import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#regexp', () => {
// 	it('O método "regexp" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.regexp), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.regexp.iterate(datatype => {
// 			it(`${datatype.id} • regexp(${datatype.label}); // true`, () => {
// 				t.is(is.regexp(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.regexp(datatype.value)) {
// 				it(`${datatype.id} • regexp(${datatype.label}); // false`, () => {
// 					t.is(is.regexp(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
