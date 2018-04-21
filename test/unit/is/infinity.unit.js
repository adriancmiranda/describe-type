import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#infinity', () => {
// 	it('O método "infinity" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.infinity), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.infinity.iterate(datatype => {
// 			it(`${datatype.id} • infinity(${datatype.label}); // true`, () => {
// 				t.is(is.infinity(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.infinity);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • infinity(${datatype.label}); // false`, () => {
// 				t.is(is.infinity(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.infinity);
// 	});
// });
