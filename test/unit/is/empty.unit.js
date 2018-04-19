import * as datatypes from 'fixtures/datatypes.fixture';
import * as is from '../../../is';

describe('#empty', () => {
	describe('true', () => {
		datatypes.empty.iterate(datatype => {
			it(`${datatype.id} • empty(${datatype.label}); // true`, () => {
				expect(is.empty(datatype.value)).toBe(true);
			});
		});
	});

	describe('false', () => {
		datatypes.filled.iterate(datatype => {
			it(`${datatype.id} • empty(${datatype.label}); // false`, () => {
				expect(is.empty(datatype.value)).toBe(false);
			});
		});
	});
});
