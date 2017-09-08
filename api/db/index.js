// external modules
import { Pool } from 'pg';

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

export default {
	query: query,
	connect: connect
};
