import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#date', () => {
// 	it('O método "date" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.date), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.date.iterate(datatype => {
// 			it(`${datatype.id} • date(${datatype.label}); // true`, () => {
// 				t.is(is.date(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			if (!is.date(datatype.value)) {
// 				it(`${datatype.id} • date(${datatype.label}); // false`, () => {
// 					t.is(is.date(datatype.value), false);
// 				});
// 			}
// 		});
// 	});
// });
