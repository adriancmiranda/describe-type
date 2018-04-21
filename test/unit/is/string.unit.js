import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#string', () => {
// 	it('O método "string" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.string), '[object Function]');
// 	});

// 	test('true', () => {
// 		datatypes.string.iterate(datatype => {
// 			it(`${datatype.id} • string(${datatype.label}); // true`, () => {
// 				t.is(is.string(datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.string);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • string(${datatype.label}); // false`, () => {
// 				t.is(is.string(datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.string);
// 	});
// });
