import pirateFlag from 'pirate-flag';
import GitRevisionPlugin from 'git-revision-webpack-plugin';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import optimizeJs from 'rollup-plugin-optimize-js';
import moment from 'moment';
import pkg from './package.json';

moment.locale();

const git = new GitRevisionPlugin({ lightweightTags: true });

const about = {
	moment: moment().format('LLLL'),
	commit: git.commithash(),
	homepage: pkg.homepage,
	author: pkg.author,
};

const build = (name, entry) => ({
	entry: `./${entry}.js`,
	targets: [
		{ dest: `./dist/${name}.umd${process.env.min ? '.min' : ''}.js`, format: 'umd' },
		{ dest: `./dist/${name}.amd${process.env.min ? '.min' : ''}.js`, format: 'amd' },
		{ dest: `./dist/${name}.iife${process.env.min ? '.min' : ''}.js`, format: 'iife' },
	],
	format: process.env.format || 'iife',
	moduleName: name,
	indent: true,
	external: ['package.json', 'moment'],
	banner: pirateFlag(pkg, about, { comment: true }),
	plugins: [
		nodeResolve({ jsnext: true, main: true, browser: true }),
		commonjs(),
	].concat(process.env.min ? [
		uglify({
			output: {
				preamble: pirateFlag(pkg, about, {
					image: [''],
					comment: true,
				}),
			},
		}, minify),
		optimizeJs(),
	] : []),
});

export default [
	build('type', 'index'),
	build('type.as', 'lib/as'),
	build('type.constructorNameOf', 'lib/constructor-name-of'),
	build('type.constructorOf', 'lib/constructor-of'),
	build('type.is', 'lib/is'),
	build('type.name', 'lib/name'),
	build('type.of', 'lib/of'),
	build('type.to', 'lib/to'),
	build('type.stringify', 'lib/stringify'),
	build('type.typify', 'lib/typify'),
];
