'use strict';
/**
 * @file middleware example
 * @module remove_date
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var setDate = require('..').setDateMiddleware; // use require('remove_date') instead
var app = require('express')();

app.disable('x-powered-by'); // remove all useless header

app.use(setDate()).get('/', function(req, res) {

  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
