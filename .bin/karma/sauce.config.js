const base = require('./base.config');
const browsers = require('./browsers.json');
const { argv, pack } = require('../config');

const BrowsersReturnedConfig = {
  get keys() {
    return Object.keys(browsers);
  },
  getBrowserList(key) {
    return Object.keys(this.fetch(key));
  },
  test(key) {
    return new RegExp(`^(${this.keys.join('|')})$`).test(key);
  },
  getOne(key) {
    return this.test(key) ? browsers[key] : null;
  },
  getAll() {
    return Object.assign.apply(Object, this.keys.map(key => browsers[key]));
  },
  fetch(key) {
    const one = typeof key === 'string' && this.getOne(key);
    return one == null ? this.getAll() : one;
  },
};

/**
 * - Safari issues -
 * @see https://support.saucelabs.com/hc/en-us/articles/115010079868-Issues-with-Safari-and-Karma-Test-Runner
 * @see https://support.saucelabs.com/hc/en-us/articles/115009908527
 */
module.exports = config => {
  const settings = Object.assign(base, {
    hostname: 'local.sauce.env',
    singleRun: true,
    browsers: BrowsersReturnedConfig.getBrowserList(argv.env),
    customLaunchers: BrowsersReturnedConfig.fetch(argv.env),
    reporters: process.env.CI ? ['dots', 'saucelabs'] : ['progress', 'saucelabs'],
    sauceLabs: {
      testName: `${pack.name} unit tests`,
      recordScreenshots: false,
      build: (
        process.env.TRAVIS_BUILD_NUMBER ||
        process.env.APPVEYOR_BUILD_NUMBER ||
        process.env.SAUCE_BUILD_ID ||
        Date.now()
      ),
      connectOptions: {
        noSslBumpDomains: 'all',
      },
    },
    browserDisconnectTolerance: 1,
    browserDisconnectTimeout: 10000,
    browserNoActivityTimeout: 4*60*1000,
    captureTimeout: 4*60*1000,
    plugins: base.plugins.concat([
      'karma-sauce-launcher',
    ]),
  });
  config.set(settings);
};
