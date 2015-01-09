# [remove_date](http://supergiovane.tk/#/remove_date)

[![NPM version](https://badge.fury.io/js/remove_date.svg)](http://badge.fury.io/js/remove_date)
[![Build Status](https://travis-ci.org/hex7c0/remove_date.svg)](https://travis-ci.org/hex7c0/remove_date)
[![Dependency Status](https://david-dm.org/hex7c0/remove_date/status.svg)](https://david-dm.org/hex7c0/remove_date)

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
```

### setDate(res,[setHeader])

#### options

 - `res` - **RegExp** response to client *(default "required")*
 - `setHeader`- **Boolean** setHeader block *(default "optional")*

## Examples

Take a look at my [examples](https://github.com/hex7c0/remove_date/tree/master/examples)

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)
