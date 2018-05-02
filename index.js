'use strict';

var _internalIndexJs = require('./internal/index.js');

var internal = _internalIndexJs;

var _hasIndexJs = require('./has/index.js');

var has = _hasIndexJs;

var _isIndexJs = require('./is/index.js');

var is = _isIndexJs;

var _internalIndexNextJs = require('./internal/index.next.js');

var _asIndexNextJs = require('./as/index.next.js');

var _schemaIndexNextJs = require('./schema/index.next.js');

for (var _internalIndexNextJs_key in _internalIndexNextJs) {
  if (_internalIndexNextJs_key !== "default") {
    exports[_internalIndexNextJs_key] = _internalIndexNextJs[_internalIndexNextJs_key];
  }
} /* eslint-disable no-unused-vars */


exports.has = has;
exports.is = is;
exports.as = _asIndexNextJs;
exports.schema = _schemaIndexNextJs;
