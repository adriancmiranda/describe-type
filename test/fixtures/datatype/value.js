/* eslint-disable no-nested-ternary */
import { constructorOf, constructorNameOf, toSource, format, pad } from './utils';

let idIndex = 0;
export default function DataTypeValue(parent, label, ctor, ...args) {
	const Ctor = constructorOf(ctor, !!args.length);
	this.parent = parent;
	this.id = pad(idIndex += 1, 3, '0');
	this.name = constructorNameOf(ctor);
	this.slug = ctor == null ? String(ctor) : (this.name === 'GeneratorFunction' ? 'Function' : this.name);
	this.args = args;
	this.ctor = Ctor;
	this.seal = `[object ${this.name}]`;
	this.type = this.name.toLowerCase();
	this.value = args.length && typeof Ctor === 'function' ? new Ctor(...args) : ctor;
	this.source = toSource(this.value);
	this.label = format(label, this);
}

DataTypeValue.prototype.remove = function remove() {
	if (!this.parent) return null;
	const rm = this.parent.children.splice(this.parent.children.indexOf(this), 1);
	this.parent = null;
	return rm;
};

DataTypeValue.prototype.clone = function clone() {
	return new DataTypeValue(this.parent, this.label, this.ctor, ...this.args);
};
