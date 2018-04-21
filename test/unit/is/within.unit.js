import test from 'ava';
import * as is from '../../../is';

test('foo', t => {
	t.pass();
});
// test('#within', () => {
// 	it('O método "within" deve existir no escopo do módulo "is"', () => {
// 		t.is(toString.call(is.within), '[object Function]');
// 	});

// 	test('true', () => {
// 		[
// 			{ value: -2, start: -10, finish: -1 },
// 			{ value: 4, start: 0, finish: 9 },
// 		].forEach(datatype => {
// 			it(`within(${String(datatype.value)}, ${String(datatype.start)}, ${String(datatype.finish)}); // true`, () => {
// 				t.is(is.within(datatype.value, datatype.start, datatype.finish), true);
// 			});
// 		});
// 	});

// 	test('false', () => {
// 		[
// 			{ value: 0, start: -10, finish: -1 },
// 			{ value: 10, start: 0, finish: 9 },
// 		].forEach(datatype => {
// 			it(`within(${String(datatype.value)}, ${String(datatype.start)}, ${String(datatype.finish)}); // false`, () => {
// 				t.is(is.within(datatype.value, datatype.start, datatype.finish), false);
// 			});
// 		});
// 	});
// });
