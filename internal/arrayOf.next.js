import array from '../is/array/array';
import unfilled from '../is/unfilled';

export default function arrayOf(value) {
	return array(value) ? value :
	unfilled(value) ? []: [value];
};
