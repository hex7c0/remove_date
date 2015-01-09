'use strict';
/**
 * @file basic test
 * @module remove_data
 * @package remove_data
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
  var setData = require('..');
  var assert = require('assert');
  var http = require('http');
  var request = require('supertest');
} catch (MODULE_NOT_FOUND) {
  console.error(MODULE_NOT_FOUND);
  process.exit(1);
}

/*
 * test module
 */
describe('basic', function() {

  var app;

  describe('normal', function() {

    before(function(done) {

      app = http.createServer(function(req, res) {

        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end();
      });
      done();
    });
    it('should get "Date" header', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err)
          throw err;
        assert.notEqual(res.header.date, undefined);
        assert.notEqual(res.headers.date, undefined);
        done();
      });
    });
  });

  describe('remove', function() {

    before(function(done) {

      app = http.createServer(function(req, res) {

        setData(res);

        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end();
      });
      done();
    });
    it('shouldn\'t get "Date" header', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err)
          throw err;
        assert.equal(res.header.date, undefined);
        assert.equal(res.headers.date, undefined);
        done();
      });
    });
  });

  describe('try to modify', function() {

    before(function(done) {

      app = http.createServer(function(req, res) {

        setData(res);
        res.sendDate = true;

        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end();
      });
      done();
    });
    it('shouldn\'t get "Date" header, after `res.sendDate`', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err)
          throw err;
        assert.equal(res.header.date, undefined);
        assert.equal(res.headers.date, undefined);
        done();
      });
    });

    before(function(done) {

      app = http.createServer(function(req, res) {

        setData(res);
        Object.defineProperty(res, 'sendDate', {
          configurable: true,
          enumerable: true,
          get: function() {

            return true;
          },
        });

        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end();
      });
      done();
    });
    it('shouldn\'t get "Date" header, after `Object.defineProperty`', function(
                                                                               done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err)
          throw err;
        assert.equal(res.header.date, undefined);
        assert.equal(res.headers.date, undefined);
        done();
      });
    });

    before(function(done) {

      app = http.createServer(function(req, res) {

        setData(res, true);
        res.setHeader('Date', 'ciao');

        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end();
      });
      done();
    });
    it('shouldn\'t get "Date" header, after `res.setHeader`', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        if (err)
          throw err;
        assert.equal(res.header.date, undefined);
        assert.equal(res.headers.date, undefined);
        done();
      });
    });
  });
});
