import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#any', () => {
// 	it('O método "any" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.any), '[object Function]');
// 	});

// 	const errorCtors = datatypes.error.extract('ctor');
// 	const errorNames = datatypes.error.extract('name');

// 	test('true', () => {
// 		datatypes.error.iterate(datatype => {
// 			it(`${datatype.id} • any([${errorNames}], ${datatype.label}); // true`, () => {
// 				t.is(is.any(errorCtors, datatype.value), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		datatypes.all.remove(datatypes.error);
// 		datatypes.all.iterate(datatype => {
// 			it(`${datatype.id} • any([${errorNames}], ${datatype.label}); // false`, () => {
// 				t.is(is.any(errorCtors, datatype.value), false);
// 			});
// 		});
// 		datatypes.all.add(datatypes.error);
// 	});
// });
