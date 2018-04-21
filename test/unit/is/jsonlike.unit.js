import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#jsonlike', () => {
// 	it('O método "jsonlike" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.jsonlike), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.jsonlike.iterate(datatype => {
// 			it(`jsonlike(${datatype.label}); // true`, () => {
// 				t.is(is.jsonlike(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.iterate(datatype => {
// 			it(`jsonlike(${datatype.label}); // false`, () => {
// 				t.is(is.jsonlike(datatype.value), false);
// 			});
// 		});
// 	});
// });
