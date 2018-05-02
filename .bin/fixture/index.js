#! /usr/bin/env node
const glob = require('glob');
const { join, resolve } = require('path');
const { argv, entry, args } = require('../config');
const spawn = require('../@/spawn');

const context = typeof argv.dir === 'string' ? argv.dir : '.fixtures/**';
const files = entry.length > 1 ? `{${entry.join(',')}}` : entry[0] || '*';

glob.sync(resolve(`${join(context, files)}?(.fixture).js`)).forEach(file => {
  spawn.sync('npx', ['babel-node', file].concat(args));
});
