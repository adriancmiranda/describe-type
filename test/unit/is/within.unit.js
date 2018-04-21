import test from 'ava';
import * as describeType from '../../../source';
import within from '../../../source/is/within';

test('describeType.is.within exposure', (t) => {
	t.is(toString.call(describeType.is.within), '[object Function]', 'should be a function');
});

test('within exposure', (t) => {
	t.is(toString.call(within), '[object Function]', 'should be a function');
});

[
	{ value: -2, start: -10, finish: -1 },
	{ value: 4, start: 0, finish: 9 },
].forEach(datatype => {
	test(`within(${String(datatype.value)}, ${String(datatype.start)}, ${String(datatype.finish)});`, (t) => {
		t.is(within(datatype.value, datatype.start, datatype.finish), true, 'should be true');
	});
});

[
	{ value: 0, start: -10, finish: -1 },
	{ value: 10, start: 0, finish: 9 },
].forEach(datatype => {
	test(`within(${String(datatype.value)}, ${String(datatype.start)}, ${String(datatype.finish)});`, (t) => {
		t.is(within(datatype.value, datatype.start, datatype.finish), false, 'should be false');
	});
});
