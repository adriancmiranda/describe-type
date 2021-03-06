import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import internalSlice from './slice.next';

const value = 'Array.prototype.slice() The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end ( end not included). The original array will not be modified.'.split('');
const cachedSlice1 = Array.prototype.slice;
const cachedSlice2 = [].slice;

new Suite()

.add('Array.prototype.slice.call', () => {
	Array.prototype.slice.call(value, 24, 42);
})

.add('Array.prototype.slice.call cached', () => {
	cachedSlice1.call(value, 24, 42);
})

.add('[].slice.call', () => {
	[].slice.call(value, 24, 42);
})

.add('[].slice.call cached', () => {
	cachedSlice2.call(value, 24, 42);
})

.add('internalSlice', () => {
	internalSlice(value, 24, 42);
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^internalSlice]/))

.run({ async: false });
