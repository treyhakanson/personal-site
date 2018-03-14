"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _pg = require("pg");

var _pgPromise = require("pg-promise");

var _pgPromise2 = _interopRequireDefault(_pgPromise);

var _dbConfig = require("../../config/db-config.json");

var _dbConfig2 = _interopRequireDefault(_dbConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pool = new _pg.Pool(_dbConfig2.default);

// custom modules
// external modules

pool.on("error", function (err, client) {
   console.error("idle client error", err.message, err.stack);
});

/**
 * Executes a sql query by injecting values as specified
 * @param {string} text - sql query to be executed
 * @param {array} values - values to be injected into the sql query
 * @param {function} callback - callback to be executed on completion of the query
 */
function query(text, values) {
   return pool.query(text, values);
}

/**
 * Connect to the database
 * @param {function} callback - callback to be executed on connection success/failure
 */
function connect(callback) {
   return pool.connect(callback);
}

/**
 * test - Test a query by prinitng out the query with the interpolated values.
 *
 * @param {string} text   The query text
 * @param {Array} values The values to be inserted
 *
 * @return {string} the final query
 */
function test(text, values) {
   var query = _pgPromise2.default.as.format(text, values);
   console.log(query);
   return query;
}

exports.default = {
   query: query,
   connect: connect,
   test: test
};