import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture.js';
import * as is from '../../../is';

test('#hosted', () => {
	it('O método "hosted" deve existir no escopo do módulo "is"', () => {
		expect(is.hosted).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.all.iterate(datatype => {
			if (!is.primitive(datatype.value)) {
				it(`${datatype.id} • hosted("foo", { foo: ${datatype.label} }); // true`, () => {
					expect(is.hosted('foo', { foo: datatype.value })).toBe(true);
				});
			}
		});
	});

	test('false', () => {
		datatypes.primitive.iterate(datatype => {
			it(`${datatype.id} • hosted("foo", { foo: ${datatype.label} }); // true`, () => {
				expect(is.hosted('foo', { foo: datatype.value })).toBe(false);
			});
		});
	});
});
