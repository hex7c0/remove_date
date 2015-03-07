# [remove_date](http://supergiovane.tk/#/remove_date)

[![NPM version](https://img.shields.io/npm/v/remove_date.svg)](https://www.npmjs.com/package/remove_date)
[![Linux Status](https://img.shields.io/travis/hex7c0/remove_date.svg?label=linux)](https://travis-ci.org/hex7c0/remove_date)
[![Windows Status](https://img.shields.io/appveyor/ci/hex7c0/remove_date.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/remove_date)
[![Dependency Status](https://img.shields.io/david/hex7c0/remove_date.svg)](https://david-dm.org/hex7c0/remove_date)
[![Coveralls](https://img.shields.io/coveralls/hex7c0/remove_date.svg)](https://coveralls.io/r/hex7c0/remove_date)

Just a simple hack to remove Date header [wiki](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) from http response

## Installation

Install through NPM

```bash
npm install remove_date
```
or
```bash
git clone git://github.com/hex7c0/remove_date.git
```

## API

inside nodejs project
```js
var setDate = require('remove_date');

require('http').createServer(function(req, res) {

  setDate(res); // remove Date header from response

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
```

### setDate(res, [setHeader])

#### options

 - `res` - **RegExp** response to client *(default "required")*
 - `setHeader`- **Boolean** setHeader block *(default "optional")*

## Examples

Take a look at my [examples](examples)

### [License GPLv3](LICENSE)
