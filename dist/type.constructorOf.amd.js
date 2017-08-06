/*!
 * 
 * ~~~~ describe-type v0.3.0
 * 
 * @commit b214cdb480d461291174984885bd0a0615bc8abc
 * @moment Sunday, August 6, 2017 6:18 PM
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 * @license (c) 2016-20173
 */
define(function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	return constructorOf;

});
