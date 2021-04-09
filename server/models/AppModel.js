const mongoose = require('mongoose');

let MONGO_URI;
if (process.env.NODE_ENV === 'testing') {
  MONGO_URI = process.env.MONGO_URI_TEST;
} else {
  MONGO_URI = process.env.MONGO_URI;
}

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'appDB',
  })
  .then(() => console.log('Connected to appDB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const appSchema = new Schema({
  name: String,
  user_id: Number,
  data: Array,
  creation_date: { type: Date, default: Date.now },
});

const App = mongoose.model('app', appSchema);
module.exports = { App };
