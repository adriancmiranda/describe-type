import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import ownValue from './ownValue';

const value = 'Array.prototype.slice() The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end ( end not included). The original array will not be modified.'.split('');
const cachedHasOwnProperty = Object.prototype.hasOwnProperty;

new Suite()

.add('~value.indexOf', () => {
	~value.indexOf(')');
})

.add('value.indexOf > -1', () => {
	value.indexOf(')') > -1;
})

.add('value.indexOf !== -1', () => {
	value.indexOf(')') !== -1;
})

.add('value.indexOf != -1', () => {
	value.indexOf(')') != -1;
})

.add('describeType.has.ownValue', () => {
	ownValue(value, ')');
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/[^describeType]/))

.run({ async: false });
