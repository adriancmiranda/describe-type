import test from 'ava';
import * as describeType from '../../../source';
import keys from '../../../source/polyfill/Object.keys.js';

test.beforeEach('Kidnap Object.keys native method', (t) => {
	t.context.nativeKeys = Object.keys;
	delete Object.keys;
	function Vec3() {
		this.x = 0;
		this.y = 0;
		this.z = 0;
	}
	Vec3.prototype = { theta: 2 };
	t.context.vec3 = new Vec3();
});

test('describeType.polyfill.keys exposure', (t) => {
	t.is(toString.call(describeType), '[object Object]', 'should be an object as a namespace');
	// t.is(toString.call(describeType.polyfill.keys), '[object Function]', 'should be a function');
});

test('keys', (t) => {
	t.is(toString.call(keys), '[object Function]', 'should be a function');
});

test('array', (t) => {
	t.deepEqual(keys(['a', 'b', 'c']), ['0', '1', '2'], 'should return the indexes');
});

test('arraylike object', (t) => {
	t.deepEqual(keys({ 0: 'a', 1: 'b', 2: 'c' }), ['0', '1', '2'], 'should return the indexes');
});

test.serial('arraylike object with random key ordering', (t) => {
	t.deepEqual(keys({ 100: 'a', 2: 'b', 7: 'c' }), ['2', '7', '100'], 'should bring it ordered');
});

test.serial('ignoring enumerables', (t) => {
	t.deepEqual(keys(t.context.vec3), ['x', 'y', 'z'], 'should ignore `getFoo` method');
});

test.serial('reading enumerables', (t) => {
	t.deepEqual(keys(t.context.vec3, true), ['x', 'y', 'z', 'theta'], 'should read `theta` method');
});

test.afterEach.always('put Object.keys method back', (t) => {
	Object.keys = t.context.nativeKeys;
});
