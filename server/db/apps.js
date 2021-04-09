const fs = require('fs');

let writeLocation;
let appsList;

if (process.env.NODE_ENV === 'test') {
  writeLocation = `${__dirname}/apps.test.json`;
  appsList = JSON.parse(fs.readFileSync(writeLocation));
}

const db = {};

/**
 * #sync - Overwrites the current database with markets list from client
 *
 * @param {Array} apps - the new market list
 * @return {Array} the list of markets
 */
db.sync = (app) => {
  if (!Array.isArray(app)) {
    return new Error(`App list must be an array, received ${typeof app}`);
  }
  db.write(app);
  db.reset();
  return appsList;
};

/**
 * #find - Returns the entire list of markets from the appropriate
 * markets.env.json file.
 *
 * @return {Array} the list of markets
 */
db.find = () => {
  db.reset();
  return appsList;
};

/**
 * #drop - Deletes everything from the appropriate markets.env.json file and
 * writes an empty array in its place.
 */
db.drop = () => {
  appsList = [];
  db.write(appsList);
};

db.write = (data) => {
  fs.writeFileSync(writeLocation, JSON.stringify(data, null, 2));
};

db.reset = () => {
  appsList = JSON.parse(fs.readFileSync(writeLocation));
};

module.exports = db;
