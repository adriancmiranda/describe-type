/* eslint-disable no-nested-ternary */
import { alias, applyAndNew } from './utils';
import DataTypeValue from './value';

export default function DataType(name) {
	this.name = typeof name === 'string' || name instanceof String ? name : 'general';
	this.children = [];
}

DataType.prototype.size = function() {
	let total = 0;
	this.iterate(node => { total++; });
	return total;
};

DataType.walkThrough = (dataType, walk, indentation = 0) => {
	indentation += 1;
	for (let i = 0; dataType && dataType.children && i < dataType.children.length; i += 1) {
		const dataTypeValue = dataType.children[i];
		const response = walk(dataTypeValue, i, indentation);
		if (response === undefined) {
			DataType.walkThrough(dataTypeValue, walk, indentation);
		} else return response;
	}
	return undefined;
};

DataType.prototype.add = function add(label, ctor, ...args) {
	const labelCtor = label && label.constructor;
	const labelSeal = label && toString.call(label).slice(8, -1);
	if (labelSeal === 'Array') {
		const values = label.slice();
		while (values.length) {
			const item = values.shift();
			this.add(item.label, item.value);
		}
	} else if (labelCtor === DataType) {
		label.parent = this;
		this.children[this.children.length] = label;
	} else if (labelCtor === DataTypeValue) {
		this.add(label.label, label.value);
	} else if (labelSeal === 'String') {
		if (arguments.length === 2 || typeof ctor === 'function') {
			const DTVWithArguments = applyAndNew(DataTypeValue, [this, label, ctor].concat(args));
			this.children[this.children.length] = new DTVWithArguments;
		}
	}
	return this;
};

DataType.prototype.remove = function remove(child) {
	return this.iterate(node => {
		if (node.children) {
			const nodeIndex = node.children.indexOf(child);
			if (nodeIndex > -1) {
				return node.children.splice(nodeIndex, 1);
			} else if (child === node) {
				const childIndex = this.children.indexOf(child);
				if (childIndex > -1) {
					return this.children.splice(childIndex, 1);
				}
			}
		}
		return undefined;
	}, 0);
};

DataType.prototype.extract = function extract(key) {
	const isSimple = typeof key === 'string' || key instanceof String;
	const props = Array.isArray(key) ? key : (isSimple ? [key] : []);
	const values = [];
	this.iterate(node => {
		let copy;
		for (let i = props.length - 1; i > -1; i -= 1) {
			if (props[i] in node) {
				if (isSimple) {
					values[values.length] = node[props[i]];
				} else {
					copy = copy || Object.create(null);
					copy[props[i]] = node[props[i]];
				}
			}
		}
		if (copy) {
			values[values.length] = copy;
		}
	});
	return values;
};

DataType.prototype.valueOf = function valueOf(index) {
	const values = this.hasChildren() ? this.children.slice() : [];
	if (values.length && (typeof index === 'number' || index instanceof Number)) {
		index = Math.max(0, Math.min(index, values.length));
		return values[index];
	}
	return values;
};

DataType.prototype.hasChildren = function hasChildren() {
	return this.children && Array.isArray(this.children) && this.children.length > 0;
};

DataType.prototype.iterate = function iterate(iterator, start = 1) {
	DataType.walkThrough(this, (node, i, depth) => {
		if (start && !node.children) {
			return iterator(node, i, depth);
		} else if (start < 1) {
			return iterator(node, i, depth);
		}
		return undefined;
	});
};

DataType.prototype.toString = function toString(indent, nodeChar = '• ', leafChar = '- ') {
	let tree = '';
	DataType.walkThrough(this, (node, i, depth) => {
		if (node.children) {
			tree += `${Array(depth).join(nodeChar)}#${node.name}\n`;
		} else {
			tree += `${Array(depth).join(leafChar)}${node.slug}\n`;
		}
	}, indent);
	return tree;
};

DataType.prototype.inspect = alias('toString');
