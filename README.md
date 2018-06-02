# describe-type
> Evaluates whether an object is compatible with a specific data type.

[![NPM][nodei_status_image]][nodei_status_url]

[![travis][travis]][travis-url]
[![appveyor][appveyor]][appveyor-url]
[![codecov][codecov]][codecov-url]
[![codacy][codacy]][codacy-url]

<!-- [![saucelabs][saucelabs]][saucelabs-url] -->

## 🏴 Installation

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
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/type.umd.js"></script>
```

Use this URL in production

```html
<script src="https://rawgit.com/adriancmiranda/describe-type/master/dist/type.umd.min.js"></script>
```

## 🏴 Usage

> type.is

```javascript
const { is } = require('describe-type');

function Sprite() {}
is.a(Sprite, new Sprite())
//=> true

is.a(Promise, new Promise(function (resolve, reject) { resolve(); }))
//=> true

is.a(Buffer, new Uint8Array(1))
//=> false

is.a(Buffer, new Buffer(1))
//=> true

is.an(Object, {})
is.an(Object, new Object())
is.an(Object, { foo: 'bar' })
is.an(Object, Object.create(null))
//=> true

is.a(Function, () => {})
is.a(Function, function () {})
is.a(Function, function* () {})
is.a(Function, new Function())
//=> true

is.an(Array, [])
is.an(Array, new Array())
//=> true

is.a(Boolean, true)
is.a(Boolean, false)
is.a(Boolean, new Boolean())
is.a(Boolean, !1)
//=> true

is.a(Number, 1)
is.a(Number, new Number(1))
//=> true

is.a(Number, Infinity)
//=> false

is.a(Number, NaN)
//=> false

is.a(String, new String('foo'))
is.a(String, 'foo')
//=> true

is.a(RegExp, new RegExp('foo'))
is.a(RegExp, /foo/)
//=> true

is.a(Date, new Date())
//=> true

is.a(Symbol, Symbol('bar'))
//=> true

is.a(Map, new Map())
is.a(WeakMap, new WeakMap())
//=> true

is.a(Set, new Set())
is.a(WeakSet, new WeakSet())
//=> true

is.an(Int8Array, new Int8Array())
is.an(Uint8Array, new Uint8Array())
is.an(Uint8ClampedArray, new Uint8ClampedArray())
is.an(Int16Array, new Int16Array())
is.an(Uint16Array, new Uint16Array())
is.an(Int32Array, new Int32Array())
is.an(Uint32Array, new Uint32Array())
is.a(Float32Array, new Float32Array())
is.a(Float64Array, new Float64Array())
is.an(ArrayBuffer, new ArrayBuffer())
is.a(TypeError, new TypeError())
is.an(Error, new Error())
//=> true

is.an(undefined, undefined)
//=> true

is.a(null, null)
//=> true

is.any([String, Function], () => {})
is.any([String, Function], '')
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

> type.is.numeric

```javascript
const type = require('describe-type');

type.is.numeric('0')
type.is.numeric('1')
type.is.numeric('1.2')
type.is.numeric(1)
//=> true
```

> type.is.int

```javascript
var type = require('describe-type');

type.is.int(-1)
type.is.int(12)
//=> true
```

> type.is.uint

```javascript
var type = require('describe-type');

type.is.int(0)
type.is.uint(1)
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

> type.is.json

```javascript
const type = require('describe-type');

type.is.json(JSON.stringify({}));
type.is.json(JSON.stringify([]));
//=> true
```

> type.is.buffer

```javascript
const { is } = require('describe-type');

is.buffer(new Buffer(1))
//=> true
```

> type.as

```javascript
const { as } = require('describe-type');

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

> typeOf

```javascript
const { typeOf } = require('describe-type');

typeOf(new Buffer(3))
//=> 'Buffer'

typeOf(new (function Fixture(){})())
//=> 'Fixture'

typeOf((() => arguments)())
typeOf(arguments)
//=> 'Arguments'

typeOf('ab')
typeOf(new String('foo'))
//=> 'String'

typeOf(/^./g)
typeOf(new RegExp('foo'))
//=> 'RegExp'

typeOf(10000)
typeOf(new Number(42))
//=> 'Number'

typeOf(Object.create(null))
typeOf({ name: 1 })
typeOf({})
//=> 'Object'

typeOf([])
typeOf([1, 2])
typeOf(new Array())
//=> 'Array'

typeOf(true)
typeOf(false)
typeOf(new Boolean(true))
//=> 'Boolean'

typeOf(new TypeError('message'))
//=> 'TypeError'

typeOf(new Error('message'))
//=> 'Error'

typeOf(null)
//=> 'null'

typeOf(undefined)
//=> 'undefined'

typeOf(Symbol)
typeOf(String)
typeOf(Boolean)
typeOf(RegExp)
typeOf(Number)
typeOf(TypeError)
typeOf(Error)
typeOf(Object)
typeOf(Array)
typeOf(Boolean)
typeOf(Date)
typeOf(ArrayBuffer)
typeOf(Buffer)
typeOf(function ObjectFixture() {})
typeOf(function () {})
typeOf(new Function())
//=> 'Function'

typeOf(function* () {})
//=> 'GeneratorFunction'

typeOf(Symbol('bar'))
//=> 'Symbol'

typeOf(new Map())
//=> 'Map'

typeOf(new WeakMap())
//=> 'WeakMap'

typeOf(new Set())
//=> 'Set'

typeOf(new WeakSet())
//=> 'WeakSet'

typeOf(new Int8Array())
//=> 'Int8Array'

typeOf(new Uint8Array())
//=> 'Uint8Array'

typeOf(new Uint8ClampedArray())
//=> 'Uint8ClampedArray'

typeOf(new Int16Array())
//=> 'Int16Array'

typeOf(new Uint16Array())
//=> 'Uint16Array'

typeOf(new Int32Array())
//=> 'Int32Array'

typeOf(new Uint32Array())
//=> 'Uint32Array'

typeOf(new Float32Array())
//=> 'Float32Array'

typeOf(new Float64Array())
//=> 'Float64Array'

typeOf(new Date())
//=> 'Date'

typeOf(new ArrayBuffer(4))
//=> 'ArrayBuffer'

typeOf(new Promise((resolve) => { resolve(); }))
//=> 'Promise'
```

> type.constructorOf

```javascript
const { constructorOf } = require('describe-type');

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
const { constructorNameOf } = require('describe-type');

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
const { name } = require('describe-type');

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
const { typify } = require('describe-type');

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

> type.stringOf

```javascript
const { stringOf } = require('describe-type');

stringOf(function Test() {})
//=> 'function Test(){}'

stringOf(/foo/)
//=> '/foo/'

stringOf({})
//=> '{}'

stringOf(1)
//=> '1'
```

> type.intOf

```javascript
const type = require('describe-type');

type.intOf(-1.2)
//=> -1

type.intOf(1.2)
//=> 1

type.intOf(1)
//=> 1
```

> type.uintOf

```javascript
const type = require('describe-type');

type.uintOf(-1.2)
//=> 0

type.uintOf(1.2)
//=> 1

type.uintOf(1)
//=> 1
```

> type.floatOf

```javascript
const type = require('describe-type');

type.floatOf('1')
//=> 1

type.floatOf('1.2')
//=> 1.2
```

> type.booleanOf

```javascript
const type = require('describe-type');

type.booleanOf(1)
type.booleanOf('true')
type.booleanOf(Infinity)
type.booleanOf('1')
//=> true

type.booleanOf(0)
type.booleanOf('false')
type.booleanOf(NaN)
type.booleanOf('0')
//=> false
```

## 🏴 License

[![licenses][licenses]][licenses-url]

<sub>[▴ Back to top](#describe-type)</sub>

<!-----------------------------------------------------------------------------
 |
 | FILES
 |
-'---------------------------------------------------------------------------->

<!-- describe-type -->
[describe-type]: /index.next.js ""

<!-- as/ -->
[describe-type/as]: /as/index.next.js ""
[describe-type/as/a]: /as/a.next.js ""
[describe-type/as/an]: /as/an.next.js ""
[describe-type/as/type]: /as/type.next.js ""
[describe-type/as/any]: /as/any.next.js ""
[describe-type/as/instanceOf]: /as/instanceOf.next.js ""
[describe-type/as/vectorOf]: /as/vectorOf.next.js ""

<!-- has/ -->
[describe-type/has]: /has/index.next.js ""
[describe-type/has/at]: /has/at.next.js ""
[describe-type/has/own]: /has/own.next.js ""
[describe-type/has/ownProperty]: /has/ownProperty.next.js ""
[describe-type/has/ownValue]: /has/ownValue.next.js ""
[describe-type/has/unsafeMethod]: /has/unsafeMethod.next.js ""

<!-- internal/ -->
[describe-type/internal]: /internal/index.next.js ""
[describe-type/internal/apply]: /internal/apply.next.js ""
[describe-type/internal/booleanOf]: /internal/booleanOf.next.js ""
[describe-type/internal/built-in]: /internal/built-in.next.js ""
[describe-type/internal/constants]: /internal/constants.next.js ""
[describe-type/internal/constructorNameOf]: /internal/constructorNameOf.next.js ""
[describe-type/internal/constructorOf]: /internal/constructorOf.next.js ""
[describe-type/internal/each]: /internal/each.next.js ""
[describe-type/internal/each.property]: /internal/each.property.next.js ""
[describe-type/internal/each.value]: /internal/each.value.next.js ""
[describe-type/internal/env]: /internal/env.next.js ""
[describe-type/internal/floatOf]: /internal/floatOf.next.js ""
[describe-type/internal/getExpectedValue]: /internal/getExpectedValue.next.js ""
[describe-type/internal/intOf]: /internal/intOf.next.js ""
[describe-type/internal/mod]: /internal/mod.next.js ""
[describe-type/internal/name]: /internal/name.next.js ""
[describe-type/internal/patterns]: /internal/patterns.next.js ""
[describe-type/internal/prototypeOf]: /internal/prototypeOf.next.js ""
[describe-type/internal/prototypes]: /internal/prototypes.next.js ""
[describe-type/internal/resolveProperty]: /internal/resolveProperty.next.js ""
[describe-type/internal/stringify]: /internal/stringify.next.js ""
[describe-type/internal/stringOf]: /internal/stringOf.next.js ""
[describe-type/internal/typeOf]: /internal/typeOf.next.js ""
[describe-type/internal/typify]: /internal/typify.next.js ""
[describe-type/internal/uintOf]: /internal/uintOf.next.js ""

<!-- is/ -->
[describe-type/is]: /is/index.next.js ""
[describe-type/is/a]: /is/a.next.js ""
[describe-type/is/an]: /is/an.next.js ""
[describe-type/is/type]: /is/type.next.js ""
[describe-type/is/any]: /is/any.next.js ""
[describe-type/is/base64]: /is/base64.next.js ""
[describe-type/is/bool]: /is/bool.next.js ""
[describe-type/is/buffer]: /is/buffer.next.js ""
[describe-type/is/callable]: /is/callable.next.js ""
[describe-type/is/date]: /is/date.next.js ""
[describe-type/is/decimal]: /is/decimal.next.js ""
[describe-type/is/defined]: /is/defined.next.js ""
[describe-type/is/element]: /is/element.next.js ""
[describe-type/is/empty]: /is/empty.next.js ""
[describe-type/is/enumerable]: /is/enumerable.next.js ""
[describe-type/is/equal]: /is/equal.next.js ""
[describe-type/is/error]: /is/error.next.js ""
[describe-type/is/even]: /is/even.next.js ""
[describe-type/is/exotic]: /is/exotic.next.js ""
[describe-type/is/filled]: /is/filled.next.js ""
[describe-type/is/hex]: /is/hex.next.js ""
[describe-type/is/hexadecimal]: /is/hexadecimal.next.js ""
[describe-type/is/hosted]: /is/hosted.next.js ""
[describe-type/is/infinity]: /is/infinity.next.js ""
[describe-type/is/instanceOf]: /is/instanceOf.next.js ""
[describe-type/is/int]: /is/int.next.js ""
[describe-type/is/jsonlike]: /is/jsonlike.next.js ""
[describe-type/is/max]: /is/max.next.js ""
[describe-type/is/min]: /is/min.next.js ""
[describe-type/is/nan]: /is/nan.next.js ""
[describe-type/is/nativeFunction]: /is/nativeFunction.next.js ""
[describe-type/is/nil]: /is/nil.next.js ""
[describe-type/is/number]: /is/number.next.js ""
[describe-type/is/numeric]: /is/numeric.next.js ""
[describe-type/is/odd]: /is/odd.next.js ""
[describe-type/is/primitive]: /is/primitive.next.js ""
[describe-type/is/symbol]: /is/symbol.next.js ""
[describe-type/is/uint]: /is/uint.next.js ""
[describe-type/is/undef]: /is/undef.next.js ""
[describe-type/is/unfilled]: /is/unfilled.next.js ""
[describe-type/is/vector]: /is/vector.next.js ""
[describe-type/is/within]: /is/within.next.js ""

<!-- is/args/ -->
[describe-type/is/args]: /is/args/index.next.js ""
[describe-type/is/args/args.empty]: /is/args/args.empty.next.js ""

<!-- is/array/ -->
[describe-type/is/array]: /is/array/index.next.js ""
[describe-type/is/array/array.empty]: /is/array/array.empty.next.js ""

<!-- is/arraylike/ -->
[describe-type/is/arraylike]: /is/arraylike/index.next.js ""
[describe-type/is/arraylike/arraylike.empty]: /is/arraylike/arraylike.empty.next.js ""

<!-- is/not/ -->
[describe-type/is/not]: /is/not/index.next.js ""
[describe-type/is/not/not.a]: /is/not/not.a.next.js ""
[describe-type/is/not/not.an]: /is/not/not.an.next.js ""
[describe-type/is/not/not.type]: /is/not/not.type.next.js ""
[describe-type/is/not/not.any]: /is/not/not.any.next.js ""
[describe-type/is/not/not.instanceOf]: /is/not/not.instanceOf.next.js ""
[describe-type/is/not/not.vectorOf]: /is/not/not.vectorOf.next.js ""

<!-- is/object/ -->
[describe-type/is/object]: /is/object/index.next.js ""
[describe-type/is/object/object.empty]: /is/object/object.empty.next.js ""

<!-- is/regexp/ -->
[describe-type/is/regexp]: /is/regexp/index.next.js ""
[describe-type/is/regexp/regexp.flags]: /is/regexp/regexp.flags.next.js ""
[describe-type/is/regexp/regexp.string]: /is/regexp/regexp.string.next.js ""

<!-- is/stream/ -->
[describe-type/is/stream]: /is/stream/index.next.js ""
[describe-type/is/stream/stream.duplex]: /is/stream/stream.duplex.next.js ""
[describe-type/is/stream/stream.readable]: /is/stream/stream.readable.next.js ""
[describe-type/is/stream/stream.transform]: /is/stream/stream.transform.next.js ""
[describe-type/is/stream/stream.writable]: /is/stream/stream.writable.next.js ""

<!-- is/string/ -->
[describe-type/is/string]: /is/string/index.next.js ""
[describe-type/is/string/string.empty]: /is/string/string.empty.next.js ""

<!-- ponyfill/ -->
[describe-type/ponyfill]: /ponyfill/index.next.js ""
[describe-type/ponyfill/Array.prototype.filter]: /ponyfill/Array.prototype.filter.next.js ""
[describe-type/ponyfill/Array.prototype.reduce]: /ponyfill/Array.prototype.reduce.next.js ""
[describe-type/ponyfill/Array.prototype.slice]: /ponyfill/Array.prototype.slice.next.js ""
[describe-type/ponyfill/Object.assign]: /ponyfill/Object.assign.next.js ""
[describe-type/ponyfill/Object.is]: /ponyfill/Object.is.next.js ""
[describe-type/ponyfill/Object.keys]: /ponyfill/Object.keys.next.js ""
[describe-type/ponyfill/String.prototype.startsWith]: /ponyfill/String.prototype.startsWith.next.js ""

<!-- schema/ -->
[describe-type/schema]: /schema/index.next.js ""

<!-- shim/ -->
[describe-type/shim/Object.create]: /shim/Object.create.next.js ""
[describe-type/shim/Object.getPrototypeOf]: /shim/Object.getPrototypeOf.next.js ""


<!-----------------------------------------------------------------------------
 |
 | PROJECT LINKS
 |
-'---------------------------------------------------------------------------->

[fork]: https://github.com/adriancmiranda/describe-type/fork "Fork it"
[pull_request]: https://github.com/adriancmiranda/describe-type/compare "Pull request"
[issue_tracker]: http://github.com/adriancmiranda/describe-type/issues "Issue tracker"


<!-----------------------------------------------------------------------------
 |
 | LICENSE
 |
-'---------------------------------------------------------------------------->

[licenses]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fadriancmiranda%2Fdescribe-type.svg?type=large ""
[licenses-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fadriancmiranda%2Fdescribe-type?ref=badge_large ""


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
 | UTILS
 |
-'---------------------------------------------------------------------------->

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
