import { Suite } from 'benchmark';
import slice from '../../../source/@/slice.js';

const value = 'Array.prototype.slice() The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end ( end not included). The original array will not be modified.'.split('');
const nativeSlice = Array.prototype.slice;

new Suite()

.add('Array.prototype.slice.call', () => {
	Array.prototype.slice.call(value, 24, 42);
})

.add('Array.prototype.slice.call cached', () => {
	nativeSlice.call(value, 24, 42);
})

.add('describeType.slice', () => {
	slice(value, 24, 42);
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'), '\n');
})

.run({ async: true });
