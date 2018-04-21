import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#nan', () => {
// 	it('O método "nan" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.nan), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.nan.iterate(datatype => {
// 			it(`${datatype.id} • nan(${datatype.label}); // true`, () => {
// 				t.is(is.nan(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.number.remove(datatypes.nan);
// 		datatypes.number.iterate(datatype => {
// 			it(`${datatype.id} • nan(${datatype.label}); // false`, () => {;
// 				t.is(is.nan(datatype.value), false);
// 			});
// 		});
// 		datatypes.number.add(datatypes.nan);
// 	});
// });
