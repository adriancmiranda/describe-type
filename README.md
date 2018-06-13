# describe-type
> The describe-type package contains a variety of package-level functions for timing code execution, retrieving information about object data type.

[![NPM][nodei_status_image]][nodei_status_url]

[![travis][travis]][travis-url]
[![appveyor][appveyor]][appveyor-url]
[![codecov][codecov]][codecov-url]
[![codacy][codacy]][codacy-url]

<!-- [![saucelabs][saucelabs]][saucelabs-url] -->

## Installation

### Using [npm](https://www.npmjs.com/package/npm "A package manager for everything")
```bash
npm i describe-type -S 
```

### Using [bower](https://www.bower.io "A package manager for the web")
```bash
bower i describe-type -S 
```

### Links to CDN

Use this URL for dev/testing

```html
<script src="https://rawgit.com/adriancmiranda/describe-type/dev/dist/describe-type.umd.js"></script>
```

Use this URL in production

```html
<script src="https://rawgit.com/adriancmiranda/describe-type/dev/dist/describe-type.umd.min.js"></script>
```

<details><summary><a>describe-type/is</a>

> Evaluates whether an object is compatible or not with a specific data type.

</summary><p>

:heavy_exclamation_mark:
Use the _[is.a](#api-a.an.type)_, _[is.an](#api-a.an.type)_ or _[is.type](#api-a.an.type)_ function instead of the _instanceof_ or
_[toString.call][toString.call]_ function for type comparisons. 

#### Arguments

- **datatype**:[Function][Function] — The data type used to evaluate the _expression_ argument.
- **expression**:any — The value to check against the data type specified.

##### Result
- [Boolean][Boolean] — A value of _true_ if _datatype_ is compatible with the data type specified in _expression_, and _false_ otherwise.

#### Example 

The following example creates an instance of the _Sprite_ class named _mySprite_ and uses the _[is.type](#api-a.an.type)_ function to test whether _mySprite_ is an instance of the _Sprite_.

```js
class Sprite {}
var mySprite = new Sprite();
console.log(is.type(Sprite, mySprite)); // true
console.log(is.type(Number, mySprite)); // false
console.log(is.type(Function, mySprite)); // false
```

### API

##### Common
- [a](#api-a.an.type)(expected :Function, value :any) :boolean <br>
- [an](#api-a.an.type)(expected :Function, value :any) <br>
- [type](#api-a.an.type)(expected :Function, value :any) :boolean <br>
- [instanceOf](#api-instanceOf)(expected :Function, value :any) :boolean <br>
- [defined](#api-defined)(value :any) :boolean <br>
- [undef](#api-undef)(value :any) :boolean <br>
- [nil](#api-nil)(value :any) :boolean <br>
- [unfilled](#api-unfilled)(value :any) :boolean <br>
- [filled](#api-filled)(value :any) :boolean <br>
- [empty](#api-empty)(value :any) :boolean <br>
- [equal](#api-equal)(valueA :any, valueB :any) :boolean <br>
- [primitive](#api-primitive)(value :any) :boolean <br>
- [exotic](#api-exotic)(value :any) :boolean <br>
- [enumerable](#api-enumerable)(value :any) :boolean <br>
- [hosted](#api-hosted)(key :string | number, host :object) :boolean <br>
- [within](#api-within)(value :number, start :number, finish :number) :boolean <br>

##### Arguments
- [args](#api-args)(value :any) :boolean <br>
- [args.empty](#api-args.empty)(value :any) :boolean <br>

##### Array
- [arraylike](#api-arraylike)(value :any) :boolean <br>
- [arraylike.empty](#api-arraylike.empty)(value :any) :boolean <br>
- [array](#api-array)(value :any) :boolean <br>
- [array.of](#api-array.of)(expected :Function, value :any) :boolean <br>
- [array.empty](#api-array.empty)(value :any) :boolean <br>

##### Object
- [object](#api-object)(value :any) :boolean <br>
- [object.empty](#api-object.empty)(value :any) :boolean <br>

##### RegExp
- [regexp](#api-regexp)(value :any) :boolean <br>
- [regexp.string](#api-regexp.string)(value :any) :boolean <br>
- [regexp.flags](#api-regexp.flags)(value :any) :boolean <br>

##### Stream
- [stream](#api-stream)(value :any) :boolean <br>
- [stream.duplex](#api-stream.duplex)(value :any) :boolean <br>
- [stream.transform](#api-stream.transform)(value :any) :boolean <br>
- [stream.readable](#api-stream.readable)(value :any) :boolean <br>
- [stream.writable](#api-stream.writable)(value :any) :boolean <br>

##### String
- [string](#api-string)(value :any) :boolean <br>
- [string.empty](#api-string.empty)(value :any) :boolean <br>

##### Function
- [fn](#api-fn)(value :any) :boolean <br>
- [fn.native](#api-fn.native)(value :any) :boolean <br>
- [fn.callable](#api-fn.callable)(value :any) :boolean <br>
- [fn.caste](#api-fn.caste)(value :any) :boolean <br>

##### Boolean
- [bool](#api-bool)(value :any) :boolean <br>

##### Date
- [date](#api-date)(value :any) :boolean <br>

##### Number
- [number](#api-number)(value :any) :boolean <br>
- [numeric](#api-numeric)(value :any) :boolean <br>
- [int](#api-int)(value :any) :boolean <br>
- [uint](#api-uint)(value :any) :boolean <br>
- [infinity](#api-infinity)(value :any) :boolean <br>
- [nan](#api-nan)(value :any) :boolean <br>
- [odd](#api-odd)(value :any) :boolean <br>
- [even](#api-even)(value :any) :boolean <br>
- [decimal](#api-decimal)(value :any) :boolean <br>
- [min](#api-min)(value: any, others: any[]) :boolean <br>
- [max](#api-max)(value: any, others: any[]) :boolean <br>

##### Error
- [error](#api-error)(value :any) :boolean <br>

##### Symbol
- [symbol](#api-symbol)(value :any) :boolean <br>

##### Element
- [element](#api-element)(value :any) :boolean <br>

##### Buffer
- [buffer](#api-buffer)(value :any) :boolean <br>

##### JSON
- [jsonlike](#api-jsonlike)(value :any) :boolean <br>

##### Encoded binary
- [base64](#api-base64)(value :any) :boolean <br>
- [hex](#api-hex)(value :any) :boolean <br>

##### Colors
- [hexadecimal](#api-hexadecimal)(value :any) :boolean <br>
- [rgb](#api-rgb)(value :any) :boolean <br>
- [rgba](#api-rgba)(value :any) :boolean <br>
<hr>


#### Common

<!-- a, an or type -->

<table id="api-a.an.type"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: A, An or Type</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.a(expected, value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/type] </td><td>

```js
const an = require('describe-type/is/an');
an(expected, value);
```
</td></tr><tr><td>

[ES6][es6:is/type] </td><td>

```js
import type from 'describe-type/is/type.next';
type(expected, value);
```
</td></tr></tbody></table>


<!-- instanceOf -->

<table id="api-instanceOf"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Instance of</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.instanceOf(expected, value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/instanceOf] </td><td>

```js
const instanceOf = require('describe-type/is/instanceOf');
instanceOf(expected, value);
```
</td></tr><tr><td>

[ES6][es6:is/instanceOf] </td><td>

```js
import instanceOf from 'describe-type/is/instanceOf.next';
instanceOf(expected, value);
```
</td></tr></tbody></table>


<!-- defined -->

<table id="api-defined"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Defined</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.defined(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/defined] </td><td>

```js
const defined = require('describe-type/is/defined');
defined(value);
```
</td></tr><tr><td>

[ES6][es6:is/defined] </td><td>

```js
import defined from 'describe-type/is/defined.next';
defined(value);
```
</td></tr></tbody></table>


<!-- undef -->

<table id="api-undef"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: undefined</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.undef(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/undef] </td><td>

```js
const undef = require('describe-type/is/undef');
undef(value);
```
</td></tr><tr><td>

[ES6][es6:is/undef] </td><td>

```js
import undef from 'describe-type/is/undef.next';
undef(value);
```
</td></tr></tbody></table>


<!-- nil -->

<table id="api-nil"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: null</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.nil(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/nil] </td><td>

```js
const nil = require('describe-type/is/nil');
nil(value);
```
</td></tr><tr><td>

[ES6][es6:is/nil] </td><td>

```js
import nil from 'describe-type/is/nil.next';
nil(value);
```
</td></tr></tbody></table>


<!-- unfilled -->

<table id="api-unfilled"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Unfilled</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.unfilled(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/unfilled] </td><td>

```js
const unfilled = require('describe-type/is/unfilled');
unfilled(value);
```
</td></tr><tr><td>

[ES6][es6:is/unfilled] </td><td>

```js
import unfilled from 'describe-type/is/unfilled.next';
unfilled(value);
```
</td></tr></tbody></table>


<!-- filled -->

<table id="api-filled"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Filled</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.filled(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/filled] </td><td>

```js
const filled = require('describe-type/is/filled');
filled(value);
```
</td></tr><tr><td>

[ES6][es6:is/filled] </td><td>

```js
import filled from 'describe-type/is/filled.next';
filled(value);
```
</td></tr></tbody></table>


<!-- empty -->

<table id="api-empty"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Empty</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.empty(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/empty] </td><td>

```js
const empty = require('describe-type/is/empty');
empty(value);
```
</td></tr><tr><td>

[ES6][es6:is/empty] </td><td>

```js
import empty from 'describe-type/is/empty.next';
empty(value);
```
</td></tr></tbody></table>


<!-- equal -->

<table id="api-equal"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Equal</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.equal(valueA, valueB);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/equal] </td><td>

```js
const equal = require('describe-type/is/equal');
equal(valueA, valueB);
```
</td></tr><tr><td>

[ES6][es6:is/equal] </td><td>

```js
import equal from 'describe-type/is/equal.next';
equal(valueA, valueB);
```
</td></tr></tbody></table>


<!-- primitive -->

<table id="api-primitive"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Primitive</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.primitive(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/primitive] </td><td>

```js
const primitive = require('describe-type/is/primitive');
primitive(value);
```
</td></tr><tr><td>

[ES6][es6:is/primitive] </td><td>

```js
import primitive from 'describe-type/is/primitive.next';
primitive(value);
```
</td></tr></tbody></table>


<!-- exotic -->

<table id="api-exotic"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Exotic</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.exotic(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/exotic] </td><td>

```js
const exotic = require('describe-type/is/exotic');
exotic(value);
```
</td></tr><tr><td>

[ES6][es6:is/exotic] </td><td>

```js
import exotic from 'describe-type/is/exotic.next';
exotic(value);
```
</td></tr></tbody></table>


<!-- enumerable -->

<table id="api-enumerable"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Enumerable</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.enumerable(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/enumerable] </td><td>

```js
const enumerable = require('describe-type/is/enumerable');
enumerable(value);
```
</td></tr><tr><td>

[ES6][es6:is/enumerable] </td><td>

```js
import enumerable from 'describe-type/is/enumerable.next';
enumerable(value);
```
</td></tr></tbody></table>


<!-- hosted -->

<table id="api-hosted"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Hosted</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.hosted(key, host);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/hosted] </td><td>

```js
const hosted = require('describe-type/is/hosted');
hosted(key, host);
```
</td></tr><tr><td>

[ES6][es6:is/hosted] </td><td>

```js
import hosted from 'describe-type/is/hosted.next';
hosted(key, host);
```
</td></tr></tbody></table>


<!-- within -->

<table id="api-within"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#common">▴</a>is: Within</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.within(value, start, finish);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/within] </td><td>

```js
const within = require('describe-type/is/within');
within(value, start, finish);
```
</td></tr><tr><td>

[ES6][es6:is/within] </td><td>

```js
import within from 'describe-type/is/within.next';
within(value, start, finish);
```
</td></tr></tbody></table>


#### Arguments

<!-- args/ -->

<table id="api-args"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#arguments-1">▴</a>is: Arguments</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.args(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/args] </td><td>

```js
const args = require('describe-type/is/args');
args(value);
```
</td></tr><tr><td>

[ES6][es6:is/args] </td><td>

```js
import args from 'describe-type/is/args/index.next';
args(value);
```
</td></tr></tbody></table>


<!-- args/empty -->

<table id="api-args.empty"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#arguments-1">▴</a>is: Arguments empty</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.args.empty(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/args/args.empty] </td><td>

```js
const argsEmpty = require('describe-type/is/args/args.empty');
argsEmpty(value);
```
</td></tr><tr><td>

[ES6][es6:is/args/args.empty] </td><td>

```js
import argsEmpty from 'describe-type/is/args/args.empty.next';
argsEmpty(value);
```
</td></tr></tbody></table>


#### Array

<!-- arraylike/ -->

<table id="api-arraylike"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#array">▴</a>is: Arraylike</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.arraylike(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/arraylike] </td><td>

```js
const arraylike = require('describe-type/is/arraylike');
arraylike(value);
```
</td></tr><tr><td>

[ES6][es6:is/arraylike] </td><td>

```js
import arraylike from 'describe-type/is/arraylike/index.next';
arraylike(value);
```
</td></tr></tbody></table>


<!-- arraylike/arraylike.empty -->

<table id="api-arraylike.empty"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#array">▴</a>is: Arraylike empty</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.arraylike.empty(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/arraylike/arraylike.empty] </td><td>

```js
const arraylikeEmpty = require('describe-type/is/arraylike/arraylike.empty');
arraylikeEmpty(value);
```
</td></tr><tr><td>

[ES6][es6:is/arraylike/arraylike.empty] </td><td>

```js
import arraylikeEmpty from 'describe-type/is/arraylike/arraylike.empty.next';
arraylikeEmpty(value);
```
</td></tr></tbody></table>


<!-- array/ -->

<table id="api-array"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#array">▴</a>is: Array</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.array(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/array] </td><td>

```js
const array = require('describe-type/is/array');
array(value);
```
</td></tr><tr><td>

[ES6][es6:is/array] </td><td>

```js
import array from 'describe-type/is/array/index.next';
array(value);
```
</td></tr></tbody></table>


<!-- array/array.empty -->

<table id="api-array.empty"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#array">▴</a>is: Array empty</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.array.empty(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/array/array.empty] </td><td>

```js
const arrayEmpty = require('describe-type/is/array/array.empty');
arrayEmpty(value);
```
</td></tr><tr><td>

[ES6][es6:is/array/array.empty] </td><td>

```js
import arrayEmpty from 'describe-type/is/array/array.empty.next';
arrayEmpty(value);
```
</td></tr></tbody></table>

<!-- array/array.of -->

<table id="api-array.of"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#array">▴</a>is: Array of</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.array.of(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/array/array.of] </td><td>

```js
const arrayOf = require('describe-type/is/array/array.of');
arrayOf(value);
```
</td></tr><tr><td>

[ES6][es6:is/array/array.of] </td><td>

```js
import arrayOf from 'describe-type/is/array/array.of.next';
arrayOf(value);
```
</td></tr></tbody></table>


#### Object

<!-- object/ -->

<table id="api-object"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#object">▴</a>is: Object</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.object(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/object] </td><td>

```js
const object = require('describe-type/is/object');
object(value);
```
</td></tr><tr><td>

[ES6][es6:is/object] </td><td>

```js
import object from 'describe-type/is/object/index.next';
object(value);
```
</td></tr></tbody></table>


<!-- object/object.empty -->

<table id="api-object.empty"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#object">▴</a>is: Object empty</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.object.empty(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/object/object.empty] </td><td>

```js
const objectEmpty = require('describe-type/is/object/object.empty');
objectEmpty(value);
```
</td></tr><tr><td>

[ES6][es6:is/object/object.empty] </td><td>

```js
import objectEmpty from 'describe-type/is/object/object.empty.next';
objectEmpty(value);
```
</td></tr></tbody></table>


#### RegExp

<!-- regexp/ -->

<table id="api-regexp"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#regexp">▴</a>is: RegExp</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.regexp(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/regexp] </td><td>

```js
const regexp = require('describe-type/is/regexp');
regexp(value);
```
</td></tr><tr><td>

[ES6][es6:is/regexp] </td><td>

```js
import regexp from 'describe-type/is/regexp/index.next';
regexp(value);
```
</td></tr></tbody></table>


<!-- regexp/regexp.string -->

<table id="api-regexp.string"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#regexp">▴</a>is: RegExp String</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.regexp.string(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/regexp/regexp.string] </td><td>

```js
const regexpString = require('describe-type/is/regexp/regexp.string');
regexpString(value);
```
</td></tr><tr><td>

[ES6][es6:is/regexp/regexp.string] </td><td>

```js
import regexpString from 'describe-type/is/regexp/regexp.string.next';
regexpString(value);
```
</td></tr></tbody></table>


<!-- regexp/regexp.flags -->

<table id="api-regexp.flags"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#regexp">▴</a>is: RegExp Flags</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.regexp.flags(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/regexp/regexp.flags] </td><td>

```js
const regexpFlags = require('describe-type/is/regexp/regexp.flags');
regexpFlags(value);
```
</td></tr><tr><td>

[ES6][es6:is/regexp/regexp.flags] </td><td>

```js
import regexpFlags from 'describe-type/is/regexp/regexp.flags.next';
regexpFlags(value);
```
</td></tr></tbody></table>


#### Stream

<!-- stream/ -->

<table id="api-stream"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#stream">▴</a>is: Stream</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.stream(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/stream] </td><td>

```js
const stream = require('describe-type/is/stream');
stream(value);
```
</td></tr><tr><td>

[ES6][es6:is/stream] </td><td>

```js
import stream from 'describe-type/is/stream/index.next';
stream(value);
```
</td></tr></tbody></table>


<!-- stream/stream.duplex -->

<table id="api-stream.duplex"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#stream">▴</a>is: Stream duplex</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.stream.duplex(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/stream/stream.duplex] </td><td>

```js
const streamDuplex = require('describe-type/is/stream/stream.duplex');
streamDuplex(value);
```
</td></tr><tr><td>

[ES6][es6:is/stream/stream.duplex] </td><td>

```js
import streamDuplex from 'describe-type/is/stream/stream.duplex.next';
streamDuplex(value);
```
</td></tr></tbody></table>


<!-- stream/stream.transform -->

<table id="api-stream.transform"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#stream">▴</a>is: Stream transform</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.stream.transform(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/stream/stream.transform] </td><td>

```js
const streamTransform = require('describe-type/is/stream/stream.transform');
streamTransform(value);
```
</td></tr><tr><td>

[ES6][es6:is/stream/stream.transform] </td><td>

```js
import streamTransform from 'describe-type/is/stream/stream.transform.next';
streamTransform(value);
```
</td></tr></tbody></table>


<!-- stream/stream.readable -->

<table id="api-stream.readable"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#stream">▴</a>is: Stream readable</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.stream.readable(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/stream/stream.readable] </td><td>

```js
const streamReadable = require('describe-type/is/stream/stream.readable');
streamReadable(value);
```
</td></tr><tr><td>

[ES6][es6:is/stream/stream.readable] </td><td>

```js
import streamReadable from 'describe-type/is/stream/stream.readable.next';
streamReadable(value);
```
</td></tr></tbody></table>


<!-- stream/stream.writable -->

<table id="api-stream.writable"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#stream">▴</a>is: Stream writable</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.stream.writable(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/stream/stream.writable] </td><td>

```js
const streamWritable = require('describe-type/is/stream/stream.writable');
streamWritable(value);
```
</td></tr><tr><td>

[ES6][es6:is/stream/stream.writable] </td><td>

```js
import streamWritable from 'describe-type/is/stream/stream.writable.next';
streamWritable(value);
```
</td></tr></tbody></table>


#### String

<!-- string/ -->

<table id="api-string"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#string">▴</a>is: String</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.string(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/string] </td><td>

```js
const string = require('describe-type/is/string');
string(value);
```
</td></tr><tr><td>

[ES6][es6:is/string] </td><td>

```js
import string from 'describe-type/is/string/index.next';
string(value);
```
</td></tr></tbody></table>


<!-- string/string.empty -->

<table id="api-string.empty"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#string">▴</a>is: String empty</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.string.empty(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/string/string.empty] </td><td>

```js
const stringEmpty = require('describe-type/is/string/string.empty');
stringEmpty(value);
```
</td></tr><tr><td>

[ES6][es6:is/string/string.empty] </td><td>

```js
import stringEmpty from 'describe-type/is/string/string.empty.next';
stringEmpty(value);
```
</td></tr></tbody></table>


#### Function

<!-- fn/ -->

<table id="api-fn"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#function">▴</a>is: Function</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.fn(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/fn] </td><td>

```js
const fn = require('describe-type/is/fn');
fn(value);
```
</td></tr><tr><td>

[ES6][es6:is/fn] </td><td>

```js
import fn from 'describe-type/is/fn/index.next';
fn(value);
```
</td></tr></tbody></table>


<!-- fn/fn.native -->

<table id="api-fn.native"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#function">▴</a>is: Function Native</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.fn.native(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/fn/fn.native] </td><td>

```js
const fnNative = require('describe-type/is/fn/fn.native');
fnNative(value);
```
</td></tr><tr><td>

[ES6][es6:is/fn/fn.native] </td><td>

```js
import fnNative from 'describe-type/is/fn/fn.native.next';
fnNative(value);
```
</td></tr></tbody></table>


<!-- fn/fn.callable -->

<table id="api-fn.callable"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#function">▴</a>is: Function Callable</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.fn.callable(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/fn/fn.callable] </td><td>

```js
const fnCallable = require('describe-type/is/fn/fn.callable');
fnCallable(value);
```
</td></tr><tr><td>

[ES6][es6:is/fn/fn.callable] </td><td>

```js
import fnCallable from 'describe-type/is/fn/fn.callable.next';
fnCallable(value);
```
</td></tr></tbody></table>


<!-- fn/fn.caste -->

<table id="api-fn.caste"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#function">▴</a>is: Class</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>

```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.fn.caste(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/fn/fn.caste] </td><td>

```js
const fnCaste = require('describe-type/is/fn/fn.caste');
fnCaste(value);
```
</td></tr><tr><td>

[ES6][es6:is/fn/fn.caste] </td><td>

```js
import fnCaste from 'describe-type/is/fn/fn.caste.next';
fnCaste(value);
```
</td></tr></tbody></table>


#### Boolean

<!-- bool -->

<table id="api-bool"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#boolean">▴</a>is: Boolean</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.bool(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/bool] </td><td>

```js
const bool = require('describe-type/is/bool');
bool(value);
```
</td></tr><tr><td>

[ES6][es6:is/bool] </td><td>

```js
import bool from 'describe-type/is/bool.next';
bool(value);
```
</td></tr></tbody></table>


#### Date

<!-- date -->

<table id="api-date"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#date">▴</a>is: Date</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.date(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/date] </td><td>

```js
const date = require('describe-type/is/date');
date(value);
```
</td></tr><tr><td>

[ES6][es6:is/date] </td><td>

```js
import date from 'describe-type/is/date.next';
date(value);
```
</td></tr></tbody></table>

#### Number

<!-- number -->

<table id="api-number"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Number</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.number(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/number] </td><td>

```js
const number = require('describe-type/is/number');
number(value);
```
</td></tr><tr><td>

[ES6][es6:is/number] </td><td>

```js
import number from 'describe-type/is/number.next';
number(value);
```
</td></tr></tbody></table>


<!-- numeric -->

<table id="api-numeric"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Numeric</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.numeric(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/numeric] </td><td>

```js
const numeric = require('describe-type/is/numeric');
numeric(value);
```
</td></tr><tr><td>

[ES6][es6:is/numeric] </td><td>

```js
import numeric from 'describe-type/is/numeric.next';
numeric(value);
```
</td></tr></tbody></table>


<!-- int -->

<table id="api-int"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Integer</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.int(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/int] </td><td>

```js
const int = require('describe-type/is/int');
int(value);
```
</td></tr><tr><td>

[ES6][es6:is/int] </td><td>

```js
import int from 'describe-type/is/int.next';
int(value);
```
</td></tr></tbody></table>


<!-- uint -->

<table id="api-uint"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Unsigned integer</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.uint(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/uint] </td><td>

```js
const uint = require('describe-type/is/uint');
uint(value);
```
</td></tr><tr><td>

[ES6][es6:is/uint] </td><td>

```js
import uint from 'describe-type/is/uint.next';
uint(value);
```
</td></tr></tbody></table>


<!-- infinity -->

<table id="api-infinity"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Infinity</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.infinity(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/infinity] </td><td>

```js
const infinity = require('describe-type/is/infinity');
infinity(value);
```
</td></tr><tr><td>

[ES6][es6:is/infinity] </td><td>

```js
import infinity from 'describe-type/is/infinity.next';
infinity(value);
```
</td></tr></tbody></table>


<!-- nan -->

<table id="api-nan"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: NaN</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.nan(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/nan] </td><td>

```js
const nan = require('describe-type/is/nan');
nan(value);
```
</td></tr><tr><td>

[ES6][es6:is/nan] </td><td>

```js
import nan from 'describe-type/is/nan.next';
nan(value);
```
</td></tr></tbody></table>


<!-- odd -->

<table id="api-odd"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Odd</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.odd(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/odd] </td><td>

```js
const odd = require('describe-type/is/odd');
odd(value);
```
</td></tr><tr><td>

[ES6][es6:is/odd] </td><td>

```js
import odd from 'describe-type/is/odd.next';
odd(value);
```
</td></tr></tbody></table>


<!-- even -->

<table id="api-even"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Even</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.even(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/even] </td><td>

```js
const even = require('describe-type/is/even');
even(value);
```
</td></tr><tr><td>

[ES6][es6:is/even] </td><td>

```js
import even from 'describe-type/is/even.next';
even(value);
```
</td></tr></tbody></table>


<!-- decimal -->

<table id="api-decimal"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Decimal</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.decimal(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/decimal] </td><td>

```js
const decimal = require('describe-type/is/decimal');
decimal(value);
```
</td></tr><tr><td>

[ES6][es6:is/decimal] </td><td>

```js
import decimal from 'describe-type/is/decimal.next';
decimal(value);
```
</td></tr></tbody></table>


<!-- min -->

<table id="api-min"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Minimum</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.min(value, others);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/min] </td><td>

```js
const min = require('describe-type/is/min');
min(value, others);
```
</td></tr><tr><td>

[ES6][es6:is/min] </td><td>

```js
import min from 'describe-type/is/min.next';
min(value, others);
```
</td></tr></tbody></table>


<!-- max -->

<table id="api-max"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#number">▴</a>is: Maximum</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.max(value, others);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/max] </td><td>

```js
const max = require('describe-type/is/max');
max(value, others);
```
</td></tr><tr><td>

[ES6][es6:is/max] </td><td>

```js
import max from 'describe-type/is/max.next';
max(value, others);
```
</td></tr></tbody></table>


#### Error

<!-- error -->

<table id="api-error"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#error">▴</a>is: Error</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.error(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/error] </td><td>

```js
const error = require('describe-type/is/error');
error(value);
```
</td></tr><tr><td>

[ES6][es6:is/error] </td><td>

```js
import error from 'describe-type/is/error.next';
error(value);
```
</td></tr></tbody></table>


#### Symbol

<!-- symbol -->

<table id="api-symbol"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#symbol">▴</a>is: Symbol</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.symbol(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/symbol] </td><td>

```js
const symbol = require('describe-type/is/symbol');
symbol(value);
```
</td></tr><tr><td>

[ES6][es6:is/symbol] </td><td>

```js
import symbol from 'describe-type/is/symbol.next';
symbol(value);
```
</td></tr></tbody></table>


#### Element

<!-- element -->

<table id="api-element"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#element">▴</a>is: Element</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.element(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/element] </td><td>

```js
const element = require('describe-type/is/element');
element(value);
```
</td></tr><tr><td>

[ES6][es6:is/element] </td><td>

```js
import element from 'describe-type/is/element.next';
element(value);
```
</td></tr></tbody></table>


#### Buffer

<!-- buffer -->

<table id="api-buffer"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#buffer">▴</a>is: Buffer</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.buffer(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/buffer] </td><td>

```js
const buffer = require('describe-type/is/buffer');
buffer(value);
```
</td></tr><tr><td>

[ES6][es6:is/buffer] </td><td>

```js
import buffer from 'describe-type/is/buffer.next';
buffer(value);
```
</td></tr></tbody></table>


#### JSON

<!-- jsonlike -->

<table id="api-jsonlike"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#json">▴</a>is: Jsonlike</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.jsonlike(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/jsonlike] </td><td>

```js
const jsonlike = require('describe-type/is/jsonlike');
jsonlike(value);
```
</td></tr><tr><td>

[ES6][es6:is/jsonlike] </td><td>

```js
import jsonlike from 'describe-type/is/jsonlike.next';
jsonlike(value);
```
</td></tr></tbody></table>


#### Encoded binary

<!-- base64 -->

<table id="api-base64"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#encoded-binary">▴</a>is: Base64</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.base64(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/base64] </td><td>

```js
const base64 = require('describe-type/is/base64');
base64(value);
```
</td></tr><tr><td>

[ES6][es6:is/base64] </td><td>

```js
import base64 from 'describe-type/is/base64.next';
base64(value);
```
</td></tr></tbody></table>


<!-- hex -->

<table id="api-hex"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#encoded-binary">▴</a>is: Hex</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.hex(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/hex] </td><td>

```js
const hex = require('describe-type/is/hex');
hex(value);
```
</td></tr><tr><td>

[ES6][es6:is/hex] </td><td>

```js
import hex from 'describe-type/is/hex.next';
hex(value);
```
</td></tr></tbody></table>


#### Colors

<!-- hexadecimal -->

<table id="api-hexadecimal"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#colors">▴</a>is: Hexadecimal</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.hexadecimal(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/hexadecimal] </td><td>

```js
const hexadecimal = require('describe-type/is/hexadecimal');
hexadecimal(value);
```
</td></tr><tr><td>

[ES6][es6:is/hexadecimal] </td><td>

```js
import hexadecimal from 'describe-type/is/hexadecimal.next';
hexadecimal(value);
```
</td></tr></tbody></table>


<!-- rgb -->

<table id="api-rgb"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#colors">▴</a>is: RGB</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>

```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.rgb(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/rgb] </td><td>

```js
const rgb = require('describe-type/is/rgb');
rgb(value);
```
</td></tr><tr><td>

[ES6][es6:is/rgb] </td><td>

```js
import rgb from 'describe-type/is/rgb.next';
rgb(value);
```
</td></tr></tbody></table>


<!-- rgba -->

<table id="api-rgba"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#colors">▴</a>is: RGBA</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:is] </td><td>

```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js"></script>
<script>is.rgba(value);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:is/rgba] </td><td>

```js
const rgba = require('describe-type/is/rgba');
rgba(value);
```
</td></tr><tr><td>

[ES6][es6:is/rgba] </td><td>

```js
import rgba from 'describe-type/is/rgba.next';
rgba(value);
```
</td></tr></tbody></table>
<sub><a href="#describe-type">▴ back to top</a></sub>
</p></details>

<details><summary><a>describe-type/as</a>

> Evaluates whether an expression specified by the first argument is a member of the data type specified by the second argument. If the first argument is a member of the data type, the result is the first argument. Otherwise, the result is the value _null_ unless the third value is set as default.<br><br>The expression used for the second argument must evaluate to a data type.

</summary><p>

#### Arguments

- **datatype**:[Function][Function] — The data type used to evaluate the _expression_ argument.
- **expression**:* — The value to check against the data type specified.
- **defaultValue**:* — The fallback value.

##### Result

- [Object][Object] — The result is _expression_ if _expression_ is a member of the data type specified in _datatype_. <br> Otherwise, the result is the value _null_ or the _defaultValue_.

#### Example

The following example creates a simple array named _myArray_ and uses the _as_ function with various data types.

```js
var myArray = ['foo', 'bar', 'baz'];
console.log(as(Array, myArray)); // foo,bar,baz
console.log(as(Number, myArray)); // null
console.log(as(Boolean, myArray, undefined)); // undefined
```

#### Variants

- [as.any](#api-as.any)(datatype :Array&#60;Function&#62;, expression :&#42;, defaultValue :&#42;) :any <br>
- [as.arrayOf](#api-as.arrayOf)(datatype :Function, expression :&#42;, defaultValue :&#42;) :any <br>

#### Shortcuts

- [as.a](#api-as.a)(datatype :Function, expression :&#42;, defaultValue :&#42;) :any <br>
- [as.an](#api-as.an)(datatype :Function, expression :&#42;, defaultValue :&#42;) :any <br>
- [as.type](#api-as.type)(datatype :Function, expression :&#42;, defaultValue :&#42;) :any <br>

#### Variants

<!-- any -->

<table id="api-as.any"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#variants">▴</a>as: Any</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:as] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/as.umd.js"></script>
<script>as.any([datatype1, datatype2, ...], currentValue, defaultValue);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:as/any] </td><td>

```js
const any = require('describe-type/as/any');
any([datatype1, datatype2, ...], currentValue, defaultValue);
```
</td></tr><tr><td>

[ES6][es6:as/any] </td><td>

```js
import any from 'describe-type/as/any.next';
any([datatype1, datatype2, ...], currentValue, defaultValue);
```
</td></tr></tbody></table>


<!-- arrayOf -->

<table id="api-as.arrayOf"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#variants">▴</a>as: Array of</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:as] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/as.umd.js"></script>
<script>as.arrayOf(datatype, currentValue, defaultValue);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:as/arrayOf] </td><td>

```js
const arrayOf = require('describe-type/as/arrayOf');
arrayOf(datatype, currentValue, defaultValue);
```
</td></tr><tr><td>

[ES6][es6:as/arrayOf] </td><td>

```js
import arrayOf from 'describe-type/as/arrayOf.next';
arrayOf(datatype, currentValue, defaultValue);
```
</td></tr></tbody></table>


#### Shortcuts

<!-- a -->

<table id="api-as.a"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#shortcuts">▴</a>as: A</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:as] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/as.umd.js"></script>
<script>as.a(datatype, currentValue, defaultValue);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:as/a] </td><td>

```js
const a = require('describe-type/as/a');
a(datatype, currentValue, defaultValue);
```
</td></tr><tr><td>

[ES6][es6:as/a] </td><td>

```js
import a from 'describe-type/as/a.next';
a(datatype, currentValue, defaultValue);
```
</td></tr></tbody></table>


<!-- an -->

<table id="api-as.an"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#shortcuts">▴</a>as: An</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:as] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/as.umd.js"></script>
<script>as.an(datatype, currentValue, defaultValue);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:as/a] </td><td>

```js
const an = require('describe-type/as/an');
an(datatype, currentValue, defaultValue);
```
</td></tr><tr><td>

[ES6][es6:as/a] </td><td>

```js
import an from 'describe-type/as/an.next';
an(datatype, currentValue, defaultValue);
```
</td></tr></tbody></table>


<!-- type -->

<table id="api-as.type"><thead><tr>
<th width="90" align="center">:umbrella:</th>
<th width="790" align="left"><a href="#shortcuts">▴</a>as: Type</th>
</tr></thead><tbody>
<tr><td>

[UMD][umd:as] </td><td>
  
```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/as.umd.js"></script>
<script>as.type(datatype, currentValue, defaultValue);</script>
```
</td></tr><tr style="background-color: #fff!important;"><td>

[CJS][cjs:as/type] </td><td>

```js
const type = require('describe-type/as/type');
type(datatype, currentValue, defaultValue);
```
</td></tr><tr><td>

[ES6][es6:as/type] </td><td>

```js
import type from 'describe-type/as/type.next';
type(datatype, currentValue, defaultValue);
```
</td></tr></tbody></table>
<sub><a href="#describe-type">▴ back to top</a></sub>
</p></details>

<!-----------------------------------------------------------------------------
 |
 | AUTHORS
 |
-'---------------------------------------------------------------------------->

### Authors

* **Adrian Miranda** - *Initial work* - [adriancmiranda](https://github.com/adriancmiranda)

See also the list of _[contributors][CONTRIBUTORS]_ who participated in this project.

[CONTRIBUTORS]: https://github.com/adriancmiranda/describe-type/graphs/contributors


<!-----------------------------------------------------------------------------
 |
 | LICENSE
 |
-'---------------------------------------------------------------------------->

### License 

[MIT](/LICENSE)


<!-----------------------------------------------------------------------------
 |
 | ES6 FILES
 |
-'----------------------------------------------------------------------------
 | describe-type/is
-'---------------------------------------------------------------------------->

<!-- is/args/ -->
[es6:is/args]: /describe-type/is/args/index.next.js ""
[es6:is/args/args.empty]: /describe-type/is/args/args.empty.next.js ""

<!-- is/array/ -->
[es6:is/array]: /describe-type/is/array/index.next.js ""
[es6:is/array/array.empty]: /describe-type/is/array/array.empty.next.js ""
[es6:is/array/array.of]: /describe-type/is/array/array.of.next.js ""

<!-- is/arraylike/ -->
[es6:is/arraylike]: /describe-type/is/arraylike/index.next.js ""
[es6:is/arraylike/arraylike.empty]: /describe-type/is/arraylike/arraylike.empty.next.js ""

<!-- is/fn/ -->
[es6:is/fn]: /describe-type/is/fn/index.next.js ""
[es6:is/fn/fn.native]: /describe-type/is/fn/fn.native.next.js ""
[es6:is/fn/fn.callable]: /describe-type/is/fn/fn.callable.next.js ""
[es6:is/fn/fn.caste]: /describe-type/is/fn/fn.caste.next.js ""

<!-- is/object/ -->
[es6:is/object]: /describe-type/is/object/index.next.js ""
[es6:is/object/object.empty]: /describe-type/is/object/object.empty.next.js ""

<!-- is/regexp/ -->
[es6:is/regexp]: /describe-type/is/regexp/index.next.js ""
[es6:is/regexp/regexp.flags]: /describe-type/is/regexp/regexp.flags.next.js ""
[es6:is/regexp/regexp.string]: /describe-type/is/regexp/regexp.string.next.js ""

<!-- is/stream/ -->
[es6:is/stream]: /describe-type/is/stream/index.next.js ""
[es6:is/stream/stream.duplex]: /describe-type/is/stream/stream.duplex.next.js ""
[es6:is/stream/stream.readable]: /describe-type/is/stream/stream.readable.next.js ""
[es6:is/stream/stream.transform]: /describe-type/is/stream/stream.transform.next.js ""
[es6:is/stream/stream.writable]: /describe-type/is/stream/stream.writable.next.js ""

<!-- is/string/ -->
[es6:is/string]: /describe-type/is/string/index.next.js ""
[es6:is/string/string.empty]: /describe-type/is/string/string.empty.next.js ""

<!-- is/ -->
[es6:is]: /describe-type/is/index.next.js ""
[es6:is/a]: /describe-type/is/a.next.js ""
[es6:is/an]: /describe-type/is/an.next.js ""
[es6:is/type]: /describe-type/is/type.next.js ""
[es6:is/any]: /describe-type/is/any.next.js ""
[es6:is/base64]: /describe-type/is/base64.next.js ""
[es6:is/bool]: /describe-type/is/bool.next.js ""
[es6:is/buffer]: /describe-type/is/buffer.next.js ""
[es6:is/date]: /describe-type/is/date.next.js ""
[es6:is/decimal]: /describe-type/is/decimal.next.js ""
[es6:is/defined]: /describe-type/is/defined.next.js ""
[es6:is/element]: /describe-type/is/element.next.js ""
[es6:is/empty]: /describe-type/is/empty.next.js ""
[es6:is/enumerable]: /describe-type/is/enumerable.next.js ""
[es6:is/equal]: /describe-type/is/equal.next.js ""
[es6:is/error]: /describe-type/is/error.next.js ""
[es6:is/even]: /describe-type/is/even.next.js ""
[es6:is/exotic]: /describe-type/is/exotic.next.js ""
[es6:is/filled]: /describe-type/is/filled.next.js ""
[es6:is/hex]: /describe-type/is/hex.next.js ""
[es6:is/hexadecimal]: /describe-type/is/hexadecimal.next.js ""
[es6:is/rgb]: /describe-type/is/rgb.next.js ""
[es6:is/rgba]: /describe-type/is/rgba.next.js ""
[es6:is/hosted]: /describe-type/is/hosted.next.js ""
[es6:is/infinity]: /describe-type/is/infinity.next.js ""
[es6:is/instanceOf]: /describe-type/is/instanceOf.next.js ""
[es6:is/int]: /describe-type/is/int.next.js ""
[es6:is/jsonlike]: /describe-type/is/jsonlike.next.js ""
[es6:is/max]: /describe-type/is/max.next.js ""
[es6:is/min]: /describe-type/is/min.next.js ""
[es6:is/nan]: /describe-type/is/nan.next.js ""
[es6:is/nil]: /describe-type/is/nil.next.js ""
[es6:is/number]: /describe-type/is/number.next.js ""
[es6:is/numeric]: /describe-type/is/numeric.next.js ""
[es6:is/odd]: /describe-type/is/odd.next.js ""
[es6:is/primitive]: /describe-type/is/primitive.next.js ""
[es6:is/symbol]: /describe-type/is/symbol.next.js ""
[es6:is/uint]: /describe-type/is/uint.next.js ""
[es6:is/undef]: /describe-type/is/undef.next.js ""
[es6:is/unfilled]: /describe-type/is/unfilled.next.js ""
[es6:is/within]: /describe-type/is/within.next.js ""

<!-----------------------------------------------------------------------------
 | describe-type/as
-'---------------------------------------------------------------------------->
[es6:as]: /describe-type/as/index.next.js ""
[es6:as/a]: /describe-type/as/a.next.js ""
[es6:as/an]: /describe-type/as/an.next.js ""
[es6:as/type]: /describe-type/as/type.next.js ""
[es6:as/any]: /describe-type/as/any.next.js ""
[es6:as/instanceOf]: /describe-type/as/instanceOf.next.js ""
[es6:as/arrayOf]: /describe-type/as/arrayOf.next.js ""


<!-----------------------------------------------------------------------------
 |
 | CJS FILES
 |
-'----------------------------------------------------------------------------
 | describe-type/is
-'---------------------------------------------------------------------------->
<!-- is/args/ -->
[cjs:is/args]: /describe-type/is/args/index.js ""
[cjs:is/args/args.empty]: /describe-type/is/args/args.empty.js ""

<!-- is/array/ -->
[cjs:is/array]: /describe-type/is/array/index.js ""
[cjs:is/array/array.empty]: /describe-type/is/array/array.empty.js ""
[cjs:is/array/array.of]: /describe-type/is/array/array.of.js ""

<!-- is/arraylike/ -->
[cjs:is/arraylike]: /describe-type/is/arraylike/index.js ""
[cjs:is/arraylike/arraylike.empty]: /describe-type/is/arraylike/arraylike.empty.js ""

<!-- is/fn/ -->
[cjs:is/fn]: /describe-type/is/fn/index.js ""
[cjs:is/fn/fn.native]: /describe-type/is/fn/fn.native.js ""
[cjs:is/fn/fn.callable]: /describe-type/is/fn/fn.callable.js ""
[cjs:is/fn/fn.caste]: /describe-type/is/fn/fn.caste.js ""

<!-- is/object/ -->
[cjs:is/object]: /describe-type/is/object/index.js ""
[cjs:is/object/object.empty]: /describe-type/is/object/object.empty.js ""

<!-- is/regexp/ -->
[cjs:is/regexp]: /describe-type/is/regexp/index.js ""
[cjs:is/regexp/regexp.flags]: /describe-type/is/regexp/regexp.flags.js ""
[cjs:is/regexp/regexp.string]: /describe-type/is/regexp/regexp.string.js ""

<!-- is/stream/ -->
[cjs:is/stream]: /describe-type/is/stream/index.js ""
[cjs:is/stream/stream.duplex]: /describe-type/is/stream/stream.duplex.js ""
[cjs:is/stream/stream.readable]: /describe-type/is/stream/stream.readable.js ""
[cjs:is/stream/stream.transform]: /describe-type/is/stream/stream.transform.js ""
[cjs:is/stream/stream.writable]: /describe-type/is/stream/stream.writable.js ""

<!-- is/string/ -->
[cjs:is/string]: /describe-type/is/string/index.js ""
[cjs:is/string/string.empty]: /describe-type/is/string/string.empty.js ""

<!-- is/ -->
[cjs:is]: /describe-type/is/index.js ""
[cjs:is/a]: /describe-type/is/a.js ""
[cjs:is/an]: /describe-type/is/an.js ""
[cjs:is/type]: /describe-type/is/type.js ""
[cjs:is/any]: /describe-type/is/any.js ""
[cjs:is/base64]: /describe-type/is/base64.js ""
[cjs:is/bool]: /describe-type/is/bool.js ""
[cjs:is/buffer]: /describe-type/is/buffer.js ""
[cjs:is/date]: /describe-type/is/date.js ""
[cjs:is/decimal]: /describe-type/is/decimal.js ""
[cjs:is/defined]: /describe-type/is/defined.js ""
[cjs:is/element]: /describe-type/is/element.js ""
[cjs:is/empty]: /describe-type/is/empty.js ""
[cjs:is/enumerable]: /describe-type/is/enumerable.js ""
[cjs:is/equal]: /describe-type/is/equal.js ""
[cjs:is/error]: /describe-type/is/error.js ""
[cjs:is/even]: /describe-type/is/even.js ""
[cjs:is/exotic]: /describe-type/is/exotic.js ""
[cjs:is/filled]: /describe-type/is/filled.js ""
[cjs:is/hex]: /describe-type/is/hex.js ""
[cjs:is/hexadecimal]: /describe-type/is/hexadecimal.js ""
[cjs:is/rgb]: /describe-type/is/rgb.js ""
[cjs:is/rgba]: /describe-type/is/rgba.js ""
[cjs:is/hosted]: /describe-type/is/hosted.js ""
[cjs:is/infinity]: /describe-type/is/infinity.js ""
[cjs:is/instanceOf]: /describe-type/is/instanceOf.js ""
[cjs:is/int]: /describe-type/is/int.js ""
[cjs:is/jsonlike]: /describe-type/is/jsonlike.js ""
[cjs:is/max]: /describe-type/is/max.js ""
[cjs:is/min]: /describe-type/is/min.js ""
[cjs:is/nan]: /describe-type/is/nan.js ""
[cjs:is/nil]: /describe-type/is/nil.js ""
[cjs:is/number]: /describe-type/is/number.js ""
[cjs:is/numeric]: /describe-type/is/numeric.js ""
[cjs:is/odd]: /describe-type/is/odd.js ""
[cjs:is/primitive]: /describe-type/is/primitive.js ""
[cjs:is/symbol]: /describe-type/is/symbol.js ""
[cjs:is/uint]: /describe-type/is/uint.js ""
[cjs:is/undef]: /describe-type/is/undef.js ""
[cjs:is/unfilled]: /describe-type/is/unfilled.js ""
[cjs:is/within]: /describe-type/is/within.js ""

<!-----------------------------------------------------------------------------
 | describe-type/as
-'---------------------------------------------------------------------------->
[cjs:as]: /describe-type/as/index.js ""
[cjs:as/a]: /describe-type/as/a.js ""
[cjs:as/an]: /describe-type/as/an.js ""
[cjs:as/type]: /describe-type/as/type.js ""
[cjs:as/any]: /describe-type/as/any.js ""
[cjs:as/instanceOf]: /describe-type/as/instanceOf.js ""
[cjs:as/arrayOf]: /describe-type/as/arrayOf.js ""


<!-----------------------------------------------------------------------------
 |
 | CONCATENATED FILES
 |
-'---------------------------------------------------------------------------->

<!-- is -->
[umd:is]: https://rawgit.com/adriancmiranda/describe-type/master/dist/is.umd.js ""
[amd:is]: https://rawgit.com/adriancmiranda/describe-type/master/dist/is.amd.js ""
[cjs:is]: https://rawgit.com/adriancmiranda/describe-type/master/dist/is.cjs.js ""
[iife:is]: https://rawgit.com/adriancmiranda/describe-type/master/dist/is.iife.js ""

<!-- as -->
[umd:as]: https://rawgit.com/adriancmiranda/describe-type/master/dist/as.umd.js ""
[amd:as]: https://rawgit.com/adriancmiranda/describe-type/master/dist/as.amd.js ""
[cjs:as]: https://rawgit.com/adriancmiranda/describe-type/master/dist/as.cjs.js ""
[iife:as]: https://rawgit.com/adriancmiranda/describe-type/master/dist/as.iife.js ""


<!-----------------------------------------------------------------------------
 |
 | BADGES
 |
-'---------------------------------------------------------------------------->

[npm]: https://img.shields.io/npm/v/describe-type.svg ""
[npm-url]: https://npmjs.com/package/describe-type ""

[travis]: https://travis-ci.org/adriancmiranda/describe-type.svg?branch=master ""
[travis-url]: https://travis-ci.org/adriancmiranda/describe-type ""

[appveyor]: https://ci.appveyor.com/api/projects/status/skbkb868peiyn9db/branch/master?svg=true ""
[appveyor-url]: https://ci.appveyor.com/project/adriancmiranda/describe-type/branch/master ""

[deps]: https://david-dm.org/adriancmiranda/describe-type.svg ""
[deps-url]: https://david-dm.org/adriancmiranda/describe-type ""

[depsci]: https://dependencyci.com/github/adriancmiranda/describe-type/badge ""
[depsci-url]: https://dependencyci.com/github/adriancmiranda/describe-type ""

[codecov]: https://codecov.io/gh/adriancmiranda/describe-type/branch/master/graph/badge.svg ""
[codecov-url]: https://codecov.io/gh/adriancmiranda/describe-type ""

[codacy]: https://api.codacy.com/project/badge/Grade/22600fdddef64b20a7fb8f7a7ffaf00e ""
[codacy-url]: https://www.codacy.com/app/adriancmiranda/describe-type?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=adriancmiranda/describe-type&amp;utm_campaign=Badge_Grade ""

[saucelabs]: https://saucelabs.com/browser-matrix/adriancmiranda.svg ""
[saucelabs-url]: https://saucelabs.com/u/adriancmiranda ""

[nodei_status_image]: https://nodei.co/npm/describe-type.png?downloads=true&downloadRank=true&stars=true ""
[nodei_status_url]: https://nodei.co/npm/describe-type ""


<!-----------------------------------------------------------------------------
 |
 | EXTERNAL LINKS
 |
-'---------------------------------------------------------------------------->

[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[toString.call]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
[ecma-type]: https://www.ecma-international.org/ecma-262/#sec-type ""


<!-----------------------------------------------------------------------------
 |
 | AWFUL
 |
-'-----------------------------------------------------------------------------
 | typeof null // => 'object'
 | typeof [] // => 'object' also typeof [].valueOf() // => 'object'
 | typeof /abc/ // => 'object' or 'function' also typeof /abc/.valueOf() // => 'object' or 'function'
 | typeof new Number(1) // => 'object' 'cause typeof new Number(1).valueOf() // => 'number'
 | typeof new String('foo') // => 'object' cause typeof new String('foo').valueOf() // => 'string'
 | typeof new Date() // => object and typeof new Date().valueOf() // => 'number'
 | typeof Math // => 'object' also Math instanceof Math // => TypeError
-'---------------------------------------------------------------------------->
