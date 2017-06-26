/**
 * /     '      /  /
 * /__      ___ (  /
 * \--`-'-|`---\ |
 * |' _/   ` __/ /
 * '._  W    ,--'
 * |_:_._/
 * 
 * ~ describe-type v0.1.0
 *
 * @moment Monday, June 26, 2017 7:21 PM
 * @commit 206b51b991546cfe37a729828e9266a1534512be
 * @homepage https://github.com/adriancmiranda/describe-type
 * @author Adrian C. Miranda
 */

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

export default stringify;
