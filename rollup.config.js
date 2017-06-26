import pirateFlag from 'pirate-flag';
import GitRevisionPlugin from 'git-revision-webpack-plugin';
import commonjs from 'rollup-plugin-commonjs';
import license from 'rollup-plugin-license';
import moment from 'moment';
import pack from './package.json';

moment.locale();

const git = new GitRevisionPlugin({ lightweightTags: true });
const build = (name, entry) => ({
	entry: `./${entry}.js`,
	dest: `./dist/${name}.${process.env.format}.js`,
	format: process.env.format || 'iife',
	moduleName: name,
	indent: true,
	external: ['package.json', 'moment'],
	plugins: [
		commonjs(),
		license({
			banner: pirateFlag(pack, {
				moment: moment().format('LLLL'),
				commit: git.commithash(),
				homepage: pack.homepage,
				author: pack.author,
			}),
		}),
	],
});

export default [
	build('type', 'index'),
	build('type.as', 'lib/as'),
	build('type.constructor-name-of', 'lib/constructor-name-of'),
	build('type.constructor-of', 'lib/constructor-of'),
	build('type.is', 'lib/is'),
	build('type.name', 'lib/name'),
	build('type.of', 'lib/of'),
	build('type.stringify', 'lib/stringify'),
	build('type.typify', 'lib/typify'),
];
