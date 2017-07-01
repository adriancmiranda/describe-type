// Type definitions for describe type 0.1.0+ (describe-type module)
// Project: npmjs.com/package/describe-type
// Definitions by: Adrian C. Miranda <https://github.com/adriancmiranda>
declare var type: type.DescribeTypeStatic;
export = type;
export as namespace type;

declare module type {

  interface DescribeTypeStatic {
    /**
     * @name as
     * @param expected:
     * @param value:
     * @param args:
     * @see type.as
     */
    as(expected: any, value: any, ...args: any[]): any;

    /**
     * @name constructorNameOf
     * @param value:
     * @see type.constructorNameOf
     */
    constructorNameOf(value: any): string;

    /**
     * @name constructorOf
     * @param value:
     * @see type.constructorOf
     */
    constructorOf(value: any): Function;

    /**
     * @name is
     * @param expected:
     * @param value:
     * @see type.is
     */
    is(expected: any, value: any): any;

    /**
     * @name name
     * @param value:
     * @param write:
     * @see type.name
     */
    name(value: any, write?: boolean): any;

    /**
     * @name of
     * @param value:
     * @see type.of
     */
    of(value: any): any;

    /**
     * @name options
     * @param expected:
     * @param object:
     * @see type.options
     */
    options(expected: Object, object: Object): any;

    /**
     * @name stringify
     * @param value:
     * @param space:
     * @param replacer:
     * @see type.stringify
     */
    stringify(value: any, space?: number, replacer?: Function): any;

    /**
     * @name typify
     * @param expected:
     * @param write:
     * @see type.typify
     */
    typify(expected: any, write?: boolean): string;
    
    /**
     * @name toString
     * @param value:
     * @param force:
     * @see type.toString
     */
    toString(value: any, force?: boolean): string;
  }
}
