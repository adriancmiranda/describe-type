import test from 'ava';
import * as datatypes from '../../fixtures/datatypes.fixture.js';
import * as describeType from '../../../source';
import nan from '../../../source/is/nan';

test('describeType.is.nan exposure', (t) => {
	t.is(toString.call(describeType.is.nan), '[object Function]', 'should be a function');
});

test('nan exposure', (t) => {
	t.is(toString.call(nan), '[object Function]', 'should be a function');
});

// 		datatypes.all.remove(datatypes.nan);
// 		datatypes.all.iterate(datatype => {
// 			test(`${datatype.id} • equal(${datatype.label}, ${datatype.label}) // true`, () => {
// 				t.is(equal(datatype.value, datatype.value), true, 'should be true');
// 			});
// 		});
// 		datatypes.all.add(datatypes.nan);

// 		let i = 0;
// 		const others = datatypes.all.extract(['label', 'value']).reverse();
// 		datatypes.all.iterate(datatype => {
// 			const other = others[i];
// 			if (!is.equal(datatype.value, other.value)) {
// 				test(`${datatype.id} • equal(${datatype.label}, ${other.label}); // false`, (t) => {
// 					t.is(equal(datatype.value, other.value), false, 'should be false');
// 				});
// 			}
// 			i += 1;
// 		});
