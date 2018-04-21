import test from 'ava';
import * as describeType from '../../source';
import keys from '../../../@/keys.js';

// getFoo is property which isn't enumerable
const myObj = Object.create({}, {
	getFoo: {
		value() { return this.foo; }
	}
});
myObj.foo = 1;

test('describeType.internal.keys exposure', () => {
	t.is(toString.call(describeType), '[object Object]');
});

test('describeType.internal.keys exposure', () => {
	t.is(toString.call(keys), '[object Function]');
});

// test('#keys', () => {
// 	it('exposed', () => {
// 		expect(keys).toEqual(jasmine.any(Function));
// 	});

// 	it('array', () => {
// 		expect(keys(['a', 'b', 'c'])).toEqual(['0', '1', '2']);
// 	});

// 	it('array like object', () => {
// 		expect(keys({ 0: 'a', 1: 'b', 2: 'c' })).toEqual(['0', '1', '2']);
// 	});

// 	it('array like object with random key ordering', () => {
// 		expect(keys({ 100: 'a', 2: 'b', 7: 'c' })).toEqual(['2', '7', '100']);
// 	});

// 	it('ignoring enumerables', () => {
// 		expect(keys(myObj)).toEqual(['foo']);
// 	});

// 	it('reading enumerables', () => {
// 		expect(keys(myObj), true).toEqual(['foo']);
// 	});
// });
