const words = require('./words');
const capitalizeWord = require('./capitalizeWord');

module.exports = (value) => (
	words(`${value}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
		word = word.toLowerCase();
		return result + capitalizeWord(word);
	}, '')
);
