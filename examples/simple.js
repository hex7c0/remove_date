'use strict';
/**
 * @file normal example
 * @module remove_date
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
var setDate = require('..'); // use require('remove_date') instead
var http = require('http');

http.createServer(function(req, res) {

  setDate(res); // remove Date header from response

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
