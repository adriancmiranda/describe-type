import primitive from '../common/primitive.js';

export default (key, host) => {
	if (host == null) return false;
	return primitive(host[key]) === false;
};
