const mongoose = require("mongoose");
const { MONGO_DB_USERNAME, MONGO_DB_PASSWORD } = require("./serverConfig.js");
const { DBConnectionError } = require("../utils/errors/index.js");

const connectDB = async () => {
  const MONGODB_URL = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@cluster0.hgdaqk5.mongodb.net/`;
  try {
    await mongoose.connect(
      MONGODB_URL,
      {
        dbName: 'Udyog-sarthi', // database name
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Connected To Mongodb Database ${mongoose.connection.host}`.brightCyan.bgGray);
  } catch (error) {
    console.log(`MongoDB Erorr ${error}`);
    throw new DBConnectionError(error);
  }
};

module.exports = {
  connectDB
};
