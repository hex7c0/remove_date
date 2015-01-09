# [remove_data](http://supergiovane.tk/#/remove_data)

[![NPM version](https://badge.fury.io/js/remove_data.svg)](http://badge.fury.io/js/remove_data)
[![Build Status](https://travis-ci.org/hex7c0/remove_data.svg)](https://travis-ci.org/hex7c0/remove_data)
[![Dependency Status](https://david-dm.org/hex7c0/remove_data/status.svg)](https://david-dm.org/hex7c0/remove_data)

Just a simple hack to remove Data header [wiki](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) from http response

## Installation

Install through NPM

```bash
npm install remove_data
```
or
```bash
git clone git://github.com/hex7c0/remove_data.git
```

## API

inside nodejs project
```js
var setData = require('remove_data');
```

### setData(res,[setHeader])

#### options

 - `res` - **RegExp** response to client *(default "required")*
 - `setHeader`- **Boolean** setHeader block *(default "optional")*

## Examples

Take a look at my [examples](https://github.com/hex7c0/remove_data/tree/master/examples)

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)
