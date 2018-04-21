import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#decimal', () => {
// 	it('O método "decimal" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.decimal), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.decimal.iterate(datatype => {
// 			it(`${datatype.id} • decimal(${datatype.label}); // true`, () => {
// 				t.is(is.decimal(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.decimal);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • decimal(${datatype.label}); // false`, () => {
// 				t.is(is.decimal(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.decimal);
// 	});
// });
