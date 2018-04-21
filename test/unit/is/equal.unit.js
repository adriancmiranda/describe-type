import test from 'ava';
import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

test('#equal', () => {
	it('O método "equal" deve existir no escopo do módulo "is"', () => {
		expect(is.primitive).toEqual(jasmine.any(Function));
	});

	test('true', () => {
		datatypes.all.remove(datatypes.nan);
		datatypes.all.iterate(datatype => {
			it(`${datatype.id} • equal(${datatype.label}, ${datatype.label}) // true`, () => {
				expect(is.equal(datatype.value, datatype.value)).toBe(true);
			});
		});
		datatypes.all.add(datatypes.nan);
	});

	test('false', () => {
		let i = 0;
		const others = datatypes.all.extract(['label', 'value']).reverse();
		datatypes.all.iterate(datatype => {
			const other = others[i];
			if (!is.equal(datatype.value, other.value)) {
				it(`${datatype.id} • equal(${datatype.label}, ${other.label}); // false`, () => {
					expect(is.equal(datatype.value, other.value)).toBe(false);
				});
			}
			i += 1;
		});
	});
});
