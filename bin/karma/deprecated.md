# Karma
> package.json scripts

If you want to use it, them use that commands below to test:

```json
{
  "scripts": {
    "report:coverage": "npm run test:cover && codecov -f test/coverage.lcov --token=$CODECOV_TOKEN",
    "test:sauce:modern": "karma start bin/karma/sauce.config.js --env modern",
    "test:sauce:mobile": "karma start bin/karma/sauce.config.js --env mobile",
    "test:sauce:legacy": "karma start bin/karma/sauce.config.js --env legacy",
    "test:sauce": "redrun -s test:sauce:*",
    "sauce": "karma start bin/karma/sauce.config.js",
    "test:travis": "karma start bin/karma/ci.config.js",
    "test:appveyor": "karma start bin/karma/ci.config.js",
    "test:cover": "cross-env NODE_ENV=test karma start bin/karma/cover.config.js",
    "test:unit": "cross-env NODE_ENV=test karma start bin/karma/unit.config.js",
    "test": "redrun -s lint flow test:unit",
    "dev": "cross-env NODE_ENV=test karma start bin/karma/dev.config.js"
  }
}
```


then and install `devDependencies`:

```
{
  "devDependencies": {
    "babel-cli": "6.26.0",
    "babel-loader": "7.1.4",
    "babel-preset-env": "1.6.1",
    "babel-preset-flow": "6.23.0",
    "karma": "2.0.0",
    "karma-chrome-launcher": "2.2.0",
    "karma-coverage": "1.1.1",
    "karma-failed-reporter": "0.0.3",
    "karma-firefox-launcher": "1.1.0",
    "karma-fixture": "0.2.6",
    "karma-html2js-preprocessor": "1.1.0",
    "karma-jasmine": "1.1.1",
    "karma-jasmine-html-reporter": "1.0.0",
    "karma-jasmine-matchers": "3.7.0",
    "karma-json-fixtures-preprocessor": "0.0.6",
    "karma-phantomjs-launcher": "1.0.4",
    "karma-phantomjs-shim": "1.5.0",
    "karma-safari-launcher": "1.0.0",
    "karma-sauce-launcher": "1.2.0",
    "karma-sinon": "1.0.5",
    "karma-sourcemap-loader": "0.3.7",
    "karma-spec-reporter": "0.0.32",
    "karma-webpack": "3.0.0",
    "jasmine-core": "3.1.0",
    "remove-flow-types-loader": "1.1.0",
    "sinon": "4.5.0",
    "webpack": "4.6.0"
  }
}
```
