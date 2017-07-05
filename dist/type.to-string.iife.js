/*!
 *    /     '      /  /
 *   /__      ___ (  /
 *   \--`-'-|`---\ |
 *    |' _/   ` __/ /
 *    '._  W    ,--'
 *       |_:_._/
 *
 * ~~~~ describe-type v0.2.3
 *
 * @moment Wednesday, July 5, 2017 12:25 PM
 * @commit dd652fc4896f59b1f4dad49444f1a806f252f57c
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
this.type = this.type || {};
this.type['to-string'] = (function () {
	'use strict';

	var objectToString = Object.prototype.toString;
	var reName$1 = /^.*function\s([^\s]*|[^(]*)\([^\x00]+/m;
	var reTrim = /\s+/g;

	var toString_1 = function toString(value, force) {
		if (value && value.constructor && force) {
			if (!value.constructor.name || value.constructor.name === 'Object') {
				return value.constructor.toString().replace(reName$1, '$1').replace(reTrim, '');
			}
			return value.constructor.name;
		}
		return objectToString.call(value).slice(8, -1);
	};

	return toString_1;

}());
