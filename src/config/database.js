const mongoose = require('mongoose');
const {
  MONGODB_URI
} = require('../../.env');

const connectDatabase = async () => {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, (err) => {
    if (err) {
      console.log("error in connection", err);
    } else {
      console.log("mongodb is connected");
    }
  });
};

module.exports = connectDatabase;
