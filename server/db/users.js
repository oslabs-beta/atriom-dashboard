const fs = require('fs');
//require('jest');

let writeLocationUsers;
let usersList;

if (process.env.NODE_ENV === 'testing') {
  writeLocationUsers = `${__dirname}/users.test.json`;
  usersList = JSON.parse(fs.readFileSync(writeLocationUsers));
}

const db = {};

db.sync = (user) => {
  //check if info entered follows schema
  db.write();
  db.reset();
  return usersList;
};

db.find = (username) => {
  db.reset();
  const userData = usersList.filter((user) => user.username === username);
  return { rows: userData };
};

db.drop = () => {
  usersList = [];
  db.write(usersList);
};

db.write = (data) => {
  fs.writeFileSync(writeLocationUsers, JSON.stringify(data, null, 2));
};

db.reset = () => {
  usersList = JSON.parse(fs.readFileSync(writeLocationUsers));
};

module.exports = db;
