const Git = require('git-revision-webpack-plugin');
const { resolve, dirname } = require('path');
const { aliases } = require('./@/aliases');
const { params } = require('./@/env');
const argv = require('./@/argv');
const banner = require('./@/banner');

exports.pack = require('../package.json');

exports.source = resolve(dirname(exports.pack.module));

exports.git = new Git({ lightweightTags: true, branch: true });

exports.env = params(process.env);

exports.argv = argv(process.argv);

exports.args = exports.argv.$.slice(3);

exports.entry = exports.argv._;

exports.flag = banner(exports.pack, exports.git);

exports.aliases = aliases(exports.source);

exports.vars = {
	__ENV__: exports.env.NODE_ENV || 'development',
	__COMMIT__: exports.git.commithash(),
	__VERSION__: exports.pack.version,
};
