import chalk from 'chalk';

export const benchmarkFatestStatus = (fastest, reVendorMethod) => {
	if (reVendorMethod.test(fastest[0])) {
		return chalk.red;
	} else if (reVendorMethod.test(fastest[1])) {
		return chalk.yellow;
	}
	return chalk.green;
};
