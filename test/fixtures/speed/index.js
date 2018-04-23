import chalk from 'chalk';

export const benchmarkFatestStatus = (reVendorMethod, progress, loaded, total) => {
	benchmarkFatestStatus.fails = benchmarkFatestStatus.fails || 0;
	benchmarkFatestStatus.warnings = benchmarkFatestStatus.warnings || 0;
	return function () {
		let statusColor = chalk.green;
		const fastestList = this.filter('fastest').map('name');
		if (reVendorMethod.test(fastestList[0])) {
			statusColor = chalk.red;
			benchmarkFatestStatus.fails += 1;
		} else if (reVendorMethod.test(fastestList[1])) {
			statusColor = chalk.yellow;
			benchmarkFatestStatus.warnings += 1;
		}
		let timeline = '';
		if (progress && loaded && total) {
			timeline = chalk.underline(`${progress}% - ${loaded} de ${total}`);
			timeline = `\n${timeline}`;
		}
		console.log(`\nFastest is:\n${statusColor(fastestList.join('\n'))}${timeline}\n`);
		if (loaded === total) {
			console.log(`--`);
			console.log(chalk.yellow(`warnings: ${benchmarkFatestStatus.warnings}`));
			console.log(chalk.red(`fails: ${benchmarkFatestStatus.fails}`));
			console.log(chalk.inverse(`total: ${total}`));
			console.log(chalk.inverse(`perf: ${Math.round((benchmarkFatestStatus.fails/total) * 100)}`));
			benchmarkFatestStatus.fails = 0;
			benchmarkFatestStatus.warnings = 0;
		}
	};
};
