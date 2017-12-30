'use strict';
/**
 * @file basic test
 * @module remove_date
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var setDate = require('..').setDateMiddleware;
var assert = require('assert');
var express = require('express');
var request = require('supertest');

/*
 * test module
 */
describe('middleware', function() {

  var app;

  describe('normal', function() {

    before(function(done) {

      app = express();
      app.get('/', function(req, res) {

        res.end();
      });
      done();
    });
    it('should get "Date" header', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        assert.ifError(err);
        assert.equal(res.header['undefined'], undefined);
        if (res.header.date === undefined) {
          assert.equal(res.header.date, undefined);
          assert.equal(res.headers.date, undefined);
        } else {
          assert.notEqual(res.header.date, null);
          assert.notEqual(res.headers.date, null);
        }
        done();
      });
    });
  });

  describe('remove', function() {

    before(function(done) {

      app = express();
      app.use(setDate()).get('/', function(req, res) {

        res.end();
      });
      done();
    });
    it('shouldn\'t get "Date" header', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        assert.ifError(err);
        assert.equal(res.header['undefined'], undefined);
        if (res.header.date === undefined) {
          assert.equal(res.header.date, undefined);
          assert.equal(res.headers.date, undefined);
        } else {
          assert.equal(res.header.date, null);
          assert.equal(res.headers.date, null);
        }
        done();
      });
    });
  });

  describe('try to modify 01', function() {

    before(function(done) {

      app = express();
      app.use(setDate(true)).get('/', function(req, res) {

        res.end();
      });
      done();
    });
    it('shouldn\'t get "Date" header, after `res.sendDate`', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        assert.ifError(err);
        assert.equal(res.header['undefined'], undefined);
        if (res.header.date === undefined) {
          assert.equal(res.header.date, undefined);
          assert.equal(res.headers.date, undefined);
        } else {
          assert.equal(res.header.date, 'null');
          assert.equal(res.headers.date, 'null');
        }
        done();
      });
    });
  });

  describe('try to modify 02', function() {

    before(function(done) {

      app = express();
      app.use(setDate(true)).get('/', function(req, res) {

        /*
         * Object.defineProperty(res, 'sendDate', { configurable: true, enumerable: true, get: function() { return true; }, });
         */
        res.end();
      });
      done();
    });
    it('shouldn\'t get "Date" header, after `Object.defineProperty`',
      function(done) {

        request(app).get('/').expect(200).end(function(err, res) {

          assert.ifError(err);
          assert.equal(res.header['undefined'], undefined);
          if (res.header.date === undefined) {
            assert.equal(res.header.date, undefined);
            assert.equal(res.headers.date, undefined);
          } else {
            assert.equal(res.header.date, 'null');
            assert.equal(res.headers.date, 'null');
          }
          done();
        });
      });
  });

  describe('try to modify 03', function() {

    before(function(done) {

      app = express();
      app.use(setDate(true)).get('/', function(req, res) {

        res.setHeader('Date', 'ciao');
        res.end();
      });
      done();
    });
    it('shouldn\'t get "Date" header, after `res.setHeader`', function(done) {

      request(app).get('/').expect(200).end(function(err, res) {

        assert.ifError(err);
        assert.equal(res.header['undefined'], undefined);
        if (res.header.date === undefined) {
          assert.equal(res.header.date, undefined);
          assert.equal(res.headers.date, undefined);
        } else {
          assert.equal(res.header.date, 'ciao');
          assert.equal(res.headers.date, 'ciao');
        }
        done();
      });
    });
  });
});
