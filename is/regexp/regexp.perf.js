import { Suite } from 'benchmark';
import { benchmarkFatestStatus, benchmarkCycle } from '../.fixtures/benchmark';
import { is } from '../index.next';

new Suite()

.add('describeType.is.a(RegExp, /foo/)', () => {
	is.a(RegExp, /foo/);
})

.add('typeof /foo/:RegExp', () => {
	typeof /foo/ === 'object';
})

.add('/foo/ instanceof RegExp', () => {
	/foo/ instanceof RegExp;
})

.add('/foo/.constructor === RegExp', () => {
	/foo/.constructor === RegExp;
})

.add('/foo/.constructor.name === "RegExp"', () => {
	/foo/.constructor.name === 'RegExp';
})

.add('/foo/.constructor.toString().replace(/^.*function\\s([^\\s]*|[^(]*)\\([^\x00]+/m, "$1").replace(/\\s+/g, "")', () => {
	/foo/.constructor.toString().replace(/^.*function\s([^\s]*|[^(]*)\([^\x00]+/m, '$1').replace(/\s+/g, '');
})

.add('Object.prototype.toString.call(/foo/:RegExp)', () => {
	Object.prototype.toString.call(/foo/) === '[object RegExp]';
})

.add('Object.prototype.toString.call(/foo/:RegExp).slice(8, -1)', () => {
	Object.prototype.toString.call(/foo/).slice(8, -1) === 'RegExp';
})

.add('Object.prototype.toString.call(/foo/:RegExp).replace(/\\[object\\s|\\]$/g, "")', () => {
	Object.prototype.toString.call(/foo/).replace(/\[object\s|\]$/g, '') === 'RegExp';
})

.on('cycle', benchmarkCycle())

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: false });
