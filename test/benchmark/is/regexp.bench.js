import chalk from 'chalk';
import { Suite } from 'benchmark';
import { benchmarkFatestStatus } from '../../fixtures/speed';
import { is } from '../../../source';

new Suite()

.add('describeType.is.a(RegExp, /foo/)', () => {
	return is.a(RegExp, /foo/);
})

.add('typeof /foo/:RegExp', () => {
	return typeof /foo/ === 'object';
})

.add('/foo/ instanceof RegExp', () => {
	return /foo/ instanceof RegExp;
})

.add('/foo/.constructor === RegExp', () => {
	return /foo/.constructor === RegExp;
})

.add('/foo/.constructor.name === "RegExp"', () => {
	return /foo/.constructor.name === 'RegExp';
})

.add('/foo/.constructor.toString().replace(/^.*function\\s([^\\s]*|[^(]*)\\([^\x00]+/m, "$1").replace(/\\s+/g, "")', () => {
	return /foo/.constructor.toString().replace(/^.*function\s([^\s]*|[^(]*)\([^\x00]+/m, '$1').replace(/\s+/g, '');
})

.add('Object.prototype.toString.call(/foo/:RegExp)', () => {
	return Object.prototype.toString.call(/foo/) === '[object RegExp]';
})

.add('Object.prototype.toString.call(/foo/:RegExp).slice(8, -1)', () => {
	return Object.prototype.toString.call(/foo/).slice(8, -1) === 'RegExp';
})

.add('Object.prototype.toString.call(/foo/:RegExp).replace(/\\[object\\s|\\]$/g, "")', () => {
	return Object.prototype.toString.call(/foo/).replace(/\[object\s|\]$/g, '') === 'RegExp';
})

.on('cycle', ({ target }) => {
	console.log(String(target));
})

.on('complete', benchmarkFatestStatus(/toString/))

.run({ async: true });
