// external modules
import { Pool } from 'pg';
import pgp from 'pg-promise';

// custom modules
import dbConfig from '../../config/db-config.json';

const pool = new Pool(dbConfig);
pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack);
});

/**
 * Executes a sql query by injecting values as specified
 * @param {string} text - sql query to be executed
 * @param {array} values - values to be injected into the sql query
 * @param {function} callback - callback to be executed on completion of the query
 */
function query(text, values) {
  return pool.query(text, values);
};

/**
 * Connect to the database
 * @param {function} callback - callback to be executed on connection success/failure
 */
function connect(callback) {
  return pool.connect(callback);
};

/**
 * test - Test a query by prinitng out the query with the interpolated values.
 *
 * @param {string} text   The query text
 * @param {Array} values The values to be inserted
 *
 * @return {string} the final query
 */
function test(text, values) {
    const query = pgp.as.format(text, values);
    console.log(query);
    return query;
}

export default {
	query,
	connect,
    test
};
