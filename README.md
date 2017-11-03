# describe-type
> Evaluates whether an object is compatible with a specific data type.

[![npm][npm]][npm-url]
[![travis][travis]][travis-url]
[![appveyor][appveyor]][appveyor-url]
[![codecov][codecov]][codecov-url]

[![saucelabs][saucelabs]][saucelabs-url]

## 🏴 Installation

### Using [npm](https://www.npmjs.com/package/npm "A package manager for everything")
```bash
npm i describe-type -S 
```

### Using [bower](https://www.bower.io "A package manager for the web")
```bash
bower i describe-type -S 
```

## 🏴 Usage

> type.is

```javascript
const { is } = require('describe-type');

function Sprite() {}
is(Sprite, new Sprite())
//=> true

is(Promise, new Promise(function (resolve, reject) { resolve(); }))
//=> true

is(Buffer, new Uint8Array(1))
//=> false

is(Buffer, new Buffer(1))
//=> true

is('Arguments', (() => arguments)())
//=> true

is(Object, {})
is(Object, new Object())
is(Object, { foo: 'bar' })
is(Object, Object.create(null))
//=> true

is(Function, () => {})
is(Function, function () {})
is(Function, function* () {})
is(Function, new Function())
//=> true

is(Array, [])
is(Array, new Array())
//=> true

is(Boolean, true)
is(Boolean, false)
is(Boolean, new Boolean())
is(Boolean, !1)
//=> true

is(Number, 1)
is(Number, new Number(1))
//=> true

is(Number, Infinity)
//=> false

is(Number, NaN)
//=> false

is(String, new String('foo'))
is(String, 'foo')
//=> true

is(RegExp, new RegExp('foo'))
is(RegExp, /foo/)
//=> true

is(Date, new Date())
//=> true

is(Symbol, Symbol('bar'))
//=> true

is(Map, new Map())
is(WeakMap, new WeakMap())
//=> true

is(Set, new Set())
is(WeakSet, new WeakSet())
//=> true

is(Int8Array, new Int8Array())
is(Uint8Array, new Uint8Array())
is(Uint8ClampedArray, new Uint8ClampedArray())
is(Int16Array, new Int16Array())
is(Uint16Array, new Uint16Array())
is(Int32Array, new Int32Array())
is(Uint32Array, new Uint32Array())
is(Float32Array, new Float32Array())
is(Float64Array, new Float64Array())
is(ArrayBuffer, new ArrayBuffer())
is(TypeError, new TypeError())
is(Error, new Error())
//=> true

is(undefined, undefined)
is(undefined, undefined)
//=> true

is(null, null)
is(null, null)
//=> true

is([String, Function], () => {})
is([String, Function], '')
//=> true
```

> type.is.not

```javascript
const { is } = require('describe-type');

is.not(Array, (() => arguments)())
is.not(Buffer, new (function Buffer(){})())
//=> true
```

> type.is.arraylike

```javascript
const { is } = require('describe-type');

is.arraylike((() => arguments)())
is.arraylike(new Uint8Array(10))
is.arraylike(new String('foo'))
is.arraylike(document.body.children)
is.arraylike({ 0: NaN, length: 0 })
is.arraylike({ 0: 'foo', length: 1 })
is.arraylike([undefined, undefined, undefined])
is.arraylike([0, 1, undefined])
is.arraylike(new Array(2))
is.arraylike([])
is.arraylike({ length: 0 })
//=> true
```

> type.is.not.arraylike

```javascript
const { is } = require('describe-type');

is.not.arraylike({ length: 2 })
is.not.arraylike(Object.create(null))
is.not.arraylike({})
is.not.arraylike(null)
is.not.arraylike(false)
is.not.arraylike()
is.not.arraylike({ length: -1 })
is.not.arraylike({ length: NaN })
is.not.arraylike({ length: 'foo' })
is.not.arraylike({ length: '' })
//=> true
```

> type.is.numeric

```javascript
const type = require('describe-type');

type.is.numeric('0')
type.is.numeric('1')
type.is.numeric('1.2')
type.is.numeric(1)
//=> true
```

> type.is.not.numeric

```javascript
var type = require('describe-type');

type.is.not.numeric('1.2a')
type.is.not.numeric('a1.2')
//=> true
```

> type.is.int

```javascript
var type = require('describe-type');

type.is.int(-1)
type.is.int(12)
//=> true
```

> type.is.not.int

```javascript
var { is } = require('describe-type');

is.not.int(1.2);
is.not.int(-1.2);
//=> true
```

> type.is.uint

```javascript
var type = require('describe-type');

type.is.int(0)
type.is.uint(1)
//=> true
```

> type.is.not.uint

```javascript
var type = require('describe-type');

type.is.not.int(1.2)
type.is.not.int(-1.2)
//=> true
```

> type.is.primitive

```javascript
const { is } = require('describe-type');
is.primitive()
is.primitive(null)
is.primitive(true)
is.primitive(false)
is.primitive(NaN)
is.primitive(Object)
is.primitive(function foo() {})
is.primitive(1)
is.primitive('foo')
is.primitive(global.Symbol('foo'))
//=> true
```

> type.is.not.primitive

```javascript
const type = require('describe-type');

type.is.not.primitive({}))
type.is.not.primitive([]))
type.is.not.primitive(Object.create(null)))
//=> true
```

> type.is.json

```javascript
const type = require('describe-type');

type.is.json(JSON.stringify({}));
type.is.json(JSON.stringify([]));
//=> true
```

> type.is.not.json

```javascript
const type = require('describe-type');

type.is.not.json(JSON.stringify('')))
type.is.not.json({}))
type.is.not.json([]))
type.is.not.json(0))
//=> true
```

> type.is.buffer

```javascript
const { is } = require('describe-type');

is.buffer(new Buffer(1))
//=> true
```

> type.is.not.buffer

```javascript
const { is } = require('describe-type');

is.not.buffer(new (function Buffer(){})())
is.not.buffer(new Uint8Array(1))
//=> true

is.not.buffer(new Buffer(1))
//=> false
```

> type.as

```javascript
const {as} = require('describe-type');

as(String, () => 'foo')
as(String, 'foo')
//=> foo

as(String, () => {})
as(String, 1)
//=> undefined

as([Number, Function], 1)
//=> 1

as([Number, Function], () => {})
//=> () => {}
```

> type.of

```javascript
const type = require('describe-type');

type.of(new Buffer(3))
//=> 'Buffer'

type.of(new (function Fixture(){})())
//=> 'Fixture'

type.of((() => arguments)())
type.of(arguments)
//=> 'Arguments'

type.of('ab')
type.of(new String('foo'))
//=> 'String'

type.of(/^./g)
type.of(new RegExp('foo'))
//=> 'RegExp'

type.of(10000)
type.of(new Number(42))
//=> 'Number'

type.of(Object.create(null))
type.of({ name: 1 })
type.of({})
//=> 'Object'

type.of([])
type.of([1, 2])
type.of(new Array())
//=> 'Array'

type.of(true)
type.of(false)
type.of(new Boolean(true))
//=> 'Boolean'

type.of(new TypeError('message'))
//=> 'TypeError'

type.of(new Error('message'))
//=> 'Error'

type.of(null)
//=> 'null'

type.of(undefined)
//=> 'undefined'

type.of(Symbol)
type.of(String)
type.of(Boolean)
type.of(RegExp)
type.of(Number)
type.of(TypeError)
type.of(Error)
type.of(Object)
type.of(Array)
type.of(Boolean)
type.of(Date)
type.of(ArrayBuffer)
type.of(Buffer)
type.of(function ObjectFixture() {})
type.of(function () {})
type.of(new Function())
//=> 'Function'

type.of(function* () {})
//=> 'GeneratorFunction'

type.of(Symbol('bar'))
//=> 'Symbol'

type.of(new Map())
//=> 'Map'

type.of(new WeakMap())
//=> 'WeakMap'

type.of(new Set())
//=> 'Set'

type.of(new WeakSet())
//=> 'WeakSet'

type.of(new Int8Array())
//=> 'Int8Array'

type.of(new Uint8Array())
//=> 'Uint8Array'

type.of(new Uint8ClampedArray())
//=> 'Uint8ClampedArray'

type.of(new Int16Array())
//=> 'Int16Array'

type.of(new Uint16Array())
//=> 'Uint16Array'

type.of(new Int32Array())
//=> 'Int32Array'

type.of(new Uint32Array())
//=> 'Uint32Array'

type.of(new Float32Array())
//=> 'Float32Array'

type.of(new Float64Array())
//=> 'Float64Array'

type.of(new Date())
//=> 'Date'

type.of(new ArrayBuffer(4))
//=> 'ArrayBuffer'

type.of(new Promise((resolve) => { resolve(); }))
//=> 'Promise'
```

> type.constructorOf

```javascript
const {constructorOf} = require('describe-type');

constructorOf(new (function Ctor(){})())
//=> Ctor

constructorOf(Infinity)
constructorOf(10000)
constructorOf(NaN)
//=> Number

constructorOf(ObjectFixture)
constructorOf(ArrayBuffer)
constructorOf(Buffer)
constructorOf(() => 'foo')
constructorOf(function () {})
constructorOf(function* () {})
//=> Function

constructorOf((() => arguments)())
constructorOf(Object.create(null))
constructorOf(new Object())
constructorOf({ name: 1 })
//=> Object

constructorOf(new Array())
constructorOf([1, 2])
//=> Array

constructorOf(new String())
constructorOf('ab|ba')
//=> String

constructorOf(new Boolean())
constructorOf(false)
//=> Boolean

constructorOf(new RegExp('^foo'))
constructorOf(/^./g)
//=> RegExp

constructorOf(new TypeError('foo'))
//=> TypeError

constructorOf(new Error('foo'))
//=> Error

constructorOf(Symbol('foo'))
//=> Symbol

constructorOf(new Date())
//=> Date

constructorOf(null)
//=> null

constructorOf(undefined)
//=> undefined

constructorOf(new Uint8Array())
//=> Uint8Array

constructorOf(new Int32Array(new ArrayBuffer(8)))
//=> Int32Array

constructorOf(new ArrayBuffer(3))
//=> ArrayBuffer

constructorOf(new Buffer('1234'))
//=> Buffer

constructorOf(new Promise((resolve) => { resolve(); }))
//=> Promise
```

> type.constructorNameOf

```javascript
const {constructorNameOf} = require('describe-type');

constructorNameOf(() => 'foo')
constructorNameOf(function () { return 'foo'; })
//=> 'Function'

constructorNameOf({ name: 1 })
constructorNameOf(Object.create(null))
constructorNameOf(Object)
//=> 'Object'

constructorNameOf(10000)
constructorNameOf(Number)
//=> 'Number'

constructorNameOf(Infinity)
//=> 'Infinity'

constructorNameOf(NaN)
//=> 'NaN'

constructorNameOf(true)
constructorNameOf(false)
constructorNameOf(Boolean)
//=> 'Boolean'

constructorNameOf(new Date())
constructorNameOf(Date)
//=> 'Date'

constructorNameOf('ab|ba')
constructorNameOf(Buffer.name)
constructorNameOf(ObjectFixture.name)
constructorNameOf(Symbol.name)
constructorNameOf(String)
constructorNameOf(String.name)
constructorNameOf(RegExp.name)
constructorNameOf(Number.name)
constructorNameOf(TypeError.name)
constructorNameOf(Error.name)
constructorNameOf(Object.name)
constructorNameOf(Array.name)
constructorNameOf(Boolean.name)
constructorNameOf(Date.name)
//=> 'String'

constructorNameOf([1, 2])
constructorNameOf(Array)
//=> 'Array'

constructorNameOf(RegExp)
constructorNameOf(/^./g)
//=> 'RegExp'

constructorNameOf(Symbol)
//=> 'Symbol'

constructorNameOf(TypeError)
//=> 'TypeError'

constructorNameOf(Error)
//=> 'Error'

constructorNameOf(null)
//=> 'null'

constructorNameOf(undefined)
constructorNameOf(NaN.name)
//=> 'undefined'

constructorNameOf((() => arguments)())
//=> 'Arguments'

constructorNameOf(ArrayBuffer)
//=> 'ArrayBuffer'

constructorNameOf(Buffer)
constructorNameOf(new Buffer('ab'))
//=> 'Buffer'

constructorNameOf(Promise)
constructorNameOf(new Promise((resolve) => { resolve(); }))
//=> 'Promise'

function ObjectFixture() {}
constructorNameOf(new ObjectFixture())
constructorNameOf(ObjectFixture)
//=> 'ObjectFixture'
```

> type.name

```javascript
const {name} = require('describe-type');

name((() => arguments)())
//=> 'Arguments'

name(RegExp)
name(/^./g)
//=> 'RegExp'

name(Number)
name(10000)
//=> 'Number'

name(NaN)
//=> 'NaN'

name(TypeError)
//=> 'TypeError'

name(Error)
//=> 'Error'

name([1, 2])
name(Array)
//=> 'Array'

name(Object)
name({ name: 1 })
//=> 'Object'

name(String)
name('ab|ba')
//=> 'String'

name('|a-b|b>a|', true) // <- override/write
//=> '_a_b|b_a_'

name('ab|ba', true) // <- override/write
//=> 'ab|ba'

name(true)
name(false)
name(Boolean)
//=> 'Boolean'

name(Date)
name(new Date())
//=> 'Date'

name(null)
//=> 'null'

name(undefined)
//=> 'undefined'

name(function FixtureTest() {})
//=> 'FixtureTest'

name(new Int32Array(new ArrayBuffer(8)))
//=> 'Int32Array'

name(ArrayBuffer)
name(new ArrayBuffer(4))
//=> 'ArrayBuffer'

name(Buffer)
name(new Buffer('ab'))
//=> 'Buffer'

name(Promise)
//=> 'Promise'

name(Symbol)
//=> 'Symbol'
```

> type.typify

```javascript
const {typify} = require('describe-type');

typify('Arguments', (() => arguments)())
//=> 'Arguments'

typify([Symbol, String, Function, Object, Boolean, Promise])
//=> 'Symbol|String|Function|Object|Boolean|Promise'

typify('Symbol|String|Function|Object|Boolean', true)
//=> 'Symbol|String|Function|Object|Boolean'

typify([1, 'Custom', {}], true) // <- override/write own name
//=> 'Number|Custom|Object'

typify('Custom', true) // <- override/write own name
//=> 'Custom'

typify([1, []])
//=> 'Number|Array'

typify([])
//=> 'Array'

typify(1)
//=> 'Number'

typify({})
//=> 'Object'

typify({ name: 1 })
//=> 'Object'

typify(RegExp)
typify(new RegExp('foo'))
typify(/^./g)
//=> 'RegExp'

typify(Boolean)
typify(true)
typify(false)
typify(new Boolean())
//=> 'Boolean'

typify(Date)
typify(new Date())
//=> 'Date'

typify(ArrayBuffer)
typify(new ArrayBuffer(4))
//=> 'ArrayBuffer'

typify(Buffer)
typify(new Buffer('ab'))
//=> 'Buffer'

typify(new Promise((resolve) => { resolve(); }))
//=> 'Promise'
```

> type.to.string

```javascript
const {to} = require('describe-type');

to.string(function Test() {})
//=> 'function Test(){}'

to.string(/foo/)
//=> '/foo/'

to.string({})
//=> '{}'

to.string(1)
//=> '1'
```

> type.to.int

```javascript
const type = require('describe-type');

type.to.int(-1.2)
//=> -1

type.to.int(1.2)
//=> 1

type.to.int(1)
//=> 1
```

> type.to.uint

```javascript
const type = require('describe-type');

type.to.uint(-1.2)
//=> 0

type.to.uint(1.2)
//=> 1

type.to.uint(1)
//=> 1
```

> type.to.float

```javascript
const type = require('describe-type');

type.to.float('1')
//=> 1

type.to.float('1.2')
//=> 1.2
```

> type.to.bool

```javascript
const type = require('describe-type');

type.to.bool(1)
type.to.bool('true')
type.to.bool(Infinity)
type.to.bool('1')
//=> true

type.to.bool(0)
type.to.bool('false')
type.to.bool(NaN)
type.to.bool('0')
//=> false
```

## 🏴 License

[![licenses][licenses]][licenses-url]

<sub>[▴ Back to top](#describe-type)</sub>


<!-- project links -->

[fork]: https://github.com/adriancmiranda/describe-type/fork "Fork it"
[pull_request]: https://github.com/adriancmiranda/describe-type/compare "Pull request"
[issue_tracker]: http://github.com/adriancmiranda/describe-type/issues "Issue tracker"


<!-- license -->

[licenses]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fadriancmiranda%2Fdescribe-type.svg?type=large
[licenses-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fadriancmiranda%2Fdescribe-type?ref=badge_large


<!-- badges -->

[npm]: https://img.shields.io/npm/v/describe-type.svg
[npm-url]: https://npmjs.com/package/describe-type

[travis]: https://travis-ci.org/adriancmiranda/describe-type.svg?branch=master
[travis-url]: https://travis-ci.org/adriancmiranda/describe-type

[appveyor]: https://ci.appveyor.com/api/projects/status/skbkb868peiyn9db/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/adriancmiranda/describe-type/branch/master

[deps]: https://david-dm.org/adriancmiranda/describe-type.svg
[deps-url]: https://david-dm.org/adriancmiranda/describe-type

[depsci]: https://dependencyci.com/github/adriancmiranda/describe-type/badge
[depsci-url]: https://dependencyci.com/github/adriancmiranda/describe-type

[codecov]: https://codecov.io/gh/adriancmiranda/describe-type/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/adriancmiranda/describe-type

[saucelabs]: https://saucelabs.com/browser-matrix/adriancmiranda.svg
[saucelabs-url]: https://saucelabs.com/u/adriancmiranda


<!-- utils -->

[ecma-type]: https://www.ecma-international.org/ecma-262/#sec-type
