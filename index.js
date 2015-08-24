'use strict';
/**
 * @file remove_date main
 * @module remove_date
 * @subpackage main
 * @version 0.2.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * functions
 */
/**
 * set sendDate property as static setter/getter
 * 
 * @private
 * @function __valueOverride
 * @param {Object} res - response to client
 */
function __valueOverride(res) {

  // res.sendDate = false; // static setter

  // block sendDate
  Object.defineProperty(res, 'sendDate', {
    configurable: false,
    enumerable: false, // remove undefined
    get: function() {

      return false;
    },
    set: function() {

      return; // ignore setter
    }
  });

  return;
}

/**
 * set header(s) property as static setter/getter
 * 
 * @private
 * @function __headerOverride
 * @param {Object} res - response to client
 */
function __headerOverride(res) {

  res.setHeader('Date', null); // populate headers

  Object.defineProperty(res._headers, 'date', { // value
    configurable: false,
    enumerable: false, // remove undefined
    get: function() {

      return;
    },
    set: function() {

      return;
    }
  });
  Object.defineProperty(res._headerNames, 'date', { // key
    configurable: false,
    enumerable: false, // remove undefined
    get: function() {

      return;
    },
    set: function() {

      return;
    }
  });
  if (res._removedHeader !== undefined) { // node > 0.10
    Object.defineProperty(res._removedHeader, 'date', { // flag
      configurable: false,
      enumerable: false, // remove undefined
      get: function() {

        return true; // force remove this header
      },
      set: function() {

        return;
      }
    });
  }

  return;
}

/**
 * remove date header from response as function
 * 
 * @public
 * @function setDate
 * @param {Object} res - response to client
 * @param {Boolean} [setHeader] - setHeader block
 */
function setDate(res, setHeader) {

  __valueOverride(res);

  if (setHeader === true) { // block setHeader
    __headerOverride(res);
  }

  return;
}
module.exports = setDate;

/**
 * remove date header from response as middleware. builder
 * 
 * @public
 * @function setDateMiddleware
 * @param {Boolean} [setHeader] - setHeader block
 * @return {Function}
 */
function setDateMiddleware(setHeader) {

  if (setHeader === true) { // block setHeader
    return function setDate(req, res, next) {

      __valueOverride(res);

      __headerOverride(res);

      return next();
    };
  }

  return function setDate(req, res, next) {

    __valueOverride(res);

    return next();
  };
}
module.exports.setDateMiddleware = setDateMiddleware;
