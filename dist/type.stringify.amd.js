/*!
 *    /     '      /  / 
 *   /__      ___ (  /   
 *   \--`-'-|`---\ |  
 *    |' _/   ` __/ /   
 *    '._  W    ,--'   
 *       |_:_._/         
 *                       
 * ~ describe-type v0.1.0
 * 
 * @moment Monday, June 26, 2017 11:15 PM
 * @commit d04aff0efbb307a5587d6a323171f33a2b7facd2
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda */
define(function () { 'use strict';

	var constructorOf = function constructorOf(value) {
		if (value === undefined || value === null) {
			return value;
		}
		return Object(value).constructor || Object;
	};

	var stringify = function stringify(value, space, replacer) {
		if (constructorOf(value) === RegExp || constructorOf(value) === Function) {
			return value.toString();
		}
		return JSON.stringify(value, replacer, space);
	};

	return stringify;

});
