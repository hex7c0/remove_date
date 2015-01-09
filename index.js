'use strict';
/**
 * @file remove_data main
 * @module remove_data
 * @package remove_data
 * @subpackage main
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * functions
 */
/**
 * remove data header from response
 * 
 * @function setData
 * @param {Object} res - response to client
 * @param {Boolean} [setHeader] - setHeader block
 */
function setData(res, setHeader) {

  // block sendDate
  Object.defineProperty(res, 'sendDate', {
    configurable: false,
    enumerable: true,
    get: function() {

      return false;
    },
    set: function() {

      return; // ignore setter
    }
  });

  if (setHeader === true) { // block setHeader
    res.setHeader('Date', 'date');
    Object.defineProperty(res._headers, 'date', {
      configurable: false,
      enumerable: true,
      get: function() {

        return;
      },
      set: function() {

        return;
      }
    });
    Object.defineProperty(res._headerNames, 'date', {
      configurable: false,
      enumerable: true,
      get: function() {

        return;
      },
      set: function() {

        return;
      }
    });
  }

  return;
}
module.exports = setData;