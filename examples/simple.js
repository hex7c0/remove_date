'use strict';
/**
 * @file normal example
 * @module remove_date
 * @package remove_date
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
  var setDate = require('..'); // require('remove_date')
  var http = require('http');
} catch (MODULE_NOT_FOUND) {
  console.error(MODULE_NOT_FOUND);
  process.exit(1);
}
http.createServer(function(req, res) {

  setDate(res);

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
