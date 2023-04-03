import pkg from 'pg';
const { Pool } = pkg;
const URL =
  'postgres://wjzpmjda:pYhofvA6_4HZAb7U5TGdqVU8bXoHQY6O@lallah.db.elephantsql.com/wjzpmjda';

//create a new pool using URL for connection string
const pool = new Pool({
  connectionString: URL
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database

export const db = {
  query: (text, params, callback) => {
    //console.log("executed query", text);
    return pool.query(text, params, callback);
  }
};
