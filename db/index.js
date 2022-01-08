const mongoose = require("mongoose");
const { mongoUri } = require("../config/config");

module.exports = async function connect() {
  require("../models/User");
  require("../models/Company");

  try {
    return mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("could not connect to mongo");
    process.exit(1);
  }
};
