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
 * @moment Tuesday, June 27, 2017 12:28 AM
 * @commit 676b2b8f12bdd048471776da72b1cc958814ae6a
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
