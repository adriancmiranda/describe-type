#! /usr/bin/env node
const fs = require('fs');
const glob = require('glob');
const colors = require('colors');
const buble = require('buble');
const { join, resolve } = require('path');
const { argv, entry, args } = require('../config');
const spawn = require('../@/spawn');

const context = typeof argv.dir === 'string' ? argv.dir : '';
const files = entry.length > 1 ? `{${entry.join(',')}}` : entry[0] || '*';

glob.sync(resolve(join(context, files))).forEach(file => {
	const code = fs.readFileSync(file);
	const result = buble.transform(code.toString());
	const outputPath = file.replace(/\.next(\.js)$/, '$1');
	const writeStream = fs.createWriteStream(outputPath);
	writeStream.write(result.code, 'utf-8');
	writeStream.on('finish', () => {
		console.info('buble:', file, colors.green(' -> '), outputPath);
	});
	writeStream.end();
});
