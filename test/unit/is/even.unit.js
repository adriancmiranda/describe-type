import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#even', () => {
// 	it('O método "even" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.even), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.even.iterate(datatype => {
// 			it(`${datatype.id} • even(${datatype.label}); // true`, () => {
// 				t.is(is.even(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.number);
// 		datatypes.all.add(datatypes.odd);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • even(${datatype.label}); // false`, () => {
// 				t.is(is.even(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.number);
// 		datatypes.all.remove(datatypes.odd);
// 	});
// });
