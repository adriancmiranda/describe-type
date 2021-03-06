const { resolve } = require('path');
const { DefinePlugin } = require('webpack');
const { aliases, env, pack, source } = require('../config');

const webpack = {
  mode: 'development',
  plugins: [new DefinePlugin(env)],
  devtool: '#inline-source-map',
  resolve: {
    alias: Object.assign({
      fixtures: resolve('.fixtures'),
    }, aliases),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      enforce: 'pre',
      use: ['remove-flow-types-loader'],
      include: source,
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['env'],
      },
    }],
  },
};

const karma = {
  webpack,
  basePath: '../../',
  port: 9876,
  colors: true,
  frameworks: ['jasmine', 'jasmine-matchers', 'sinon', 'fixture', 'phantomjs-shim'],
  files: [pack.module, {
    pattern: '.fixtures/**/*.fixture.*',
    watched: true,
  }, {
    pattern: 'index.unit.js',
    watched: true,
  }],
  preprocessors: {
    '**/*.unit.js': ['webpack', 'sourcemap'],
    '.fixtures/**/{index,*.fixture}.js': ['webpack', 'sourcemap'],
    '.fixtures/**/*.fixture.html': ['html2js'],
    '.fixtures/**/*.fixture.json': ['json_fixtures'],
  },
  webpackMiddleware: {
    noInfo: true,
  },
  jsonFixturesPreprocessor: {
    variableName: '__json__',
  },
  plugins: [
    'karma-jasmine',
    'karma-jasmine-matchers',
    'karma-sinon',
    'karma-fixture',
    'karma-phantomjs-shim',
    'karma-json-fixtures-preprocessor',
    'karma-html2js-preprocessor',
    'karma-sourcemap-loader',
    'karma-webpack',
  ],
};

karma.preprocessors[pack.module] = ['webpack', 'sourcemap'];
module.exports = karma;
