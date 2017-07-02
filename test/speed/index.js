/* eslint-disable no-unused-expressions */
const { Suite } = require('benchmark');
const type = require('../../');

new Suite()

.add('typeof', () => {
	typeof 'foo';
})

.add('type.of', () => {
	type.of('foo');
})

.on('cycle', (event) => {
	console.log(String(event.target));
})

.on('complete', function () {
	console.log('\nFastest is ' + this.filter('fastest').map('name'));
})

.run({ async: true });
