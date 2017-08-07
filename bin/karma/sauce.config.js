const base = require('./base.config');
const { argv } = require('../config');

const batches = {
	browsers: {
		sl_chrome: {
			base: 'SauceLabs',
			browserName: 'chrome',
			platform: 'Windows 7',
		},
		sl_firefox: {
			base: 'SauceLabs',
			browserName: 'firefox',
		},
		sl_mac_safari: {
			base: 'SauceLabs',
			browserName: 'safari',
			platform: 'OS X 10.10',
		},
	},
	ies: {
		// sl_ie_8: {
		// 	base: 'SauceLabs',
		// 	browserName: 'internet explorer',
		// 	platform: 'Windows XP',
		// 	version: '8',
		// },
		sl_ie_9: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 7',
			version: '9',
		},
		sl_ie_10: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 8',
			version: '10',
		},
		sl_ie_11: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 8.1',
			version: '11',
		},
		sl_edge: {
			base: 'SauceLabs',
			browserName: 'MicrosoftEdge',
			platform: 'Windows 10',
		},
	},
	mobiles: {
		sl_ios_safari_9: {
			base: 'SauceLabs',
			browserName: 'iphone',
			version: '10.3',
		},
		sl_android_6_0: {
			base: 'SauceLabs',
			browserName: 'android',
			version: '6.0',
		},
	},
};

module.exports = config => {
	const batch = batches[argv.env || 'browsers'];
	const settings = Object.assign(base, {
		singleRun: true,
		customLaunchers: batch,
		browsers: Object.keys(batch),
		reporters: process.env.CI ? ['dots', 'saucelabs'] : ['progress', 'saucelabs'],
		sauceLabs: {
			testName: 'describe-type unit tests',
			recordScreenshots: false,
			build: (
				process.env.TRAVIS_BUILD_NUMBER ||
				process.env.APPVEYOR_BUILD_NUMBER ||
				process.env.SAUCE_BUILD_ID ||
				Date.now()
			),
			connectOptions: {
				'no-ssl-bump-domains': 'all',
			},
		},
	});
	if (argv.env === 'mobiles') {
		settings.concurrency = 2;
		settings.browserDisconnectTolerance = 3;
		settings.captureTimeout = 300000;
		settings.browserNoActivityTimeout = 300000;
		settings.browserDisconnectTimeout = 300000;
	}
	config.set(settings);
};
