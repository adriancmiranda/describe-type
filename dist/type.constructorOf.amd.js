/*!
 * 
 * ~~~~ describe-type v0.3.0
 * 
 * @commit b5cc948716dd8a6a54e98eaed5dd1c07d348e251
 * @moment Sunday, August 6, 2017 11:24 AM
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
