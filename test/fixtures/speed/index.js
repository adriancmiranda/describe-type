import chalk from 'chalk';

export const benchmarkFatestStatus = (reVendorMethod, progress, loaded, total) => {
	return function () {
		let statusColor = chalk.green;
		const fastestList = this.filter('fastest').map('name');
		if (reVendorMethod.test(fastestList[0])) {
			statusColor = chalk.red;
		} else if (reVendorMethod.test(fastestList[1])) {
			statusColor = chalk.yellow;
		}
		let timeline = '';
		if (progress && loaded && total) {
			timeline = chalk.underline(`${progress}% - ${loaded} de ${total}`);
			timeline = `\n${timeline}`;
		}
		console.log(`\nFastest is:\n${statusColor(fastestList.join('\n'))}${timeline}\n`);
	};
};
