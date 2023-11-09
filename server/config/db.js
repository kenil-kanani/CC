import mongoose from "mongoose";

const connectDB = async () => {
  const USERNAME = process.env.MONGO_DB_USERNAME;
  const PASSWORD = process.env.MONGO_DB_PASSWORD;
  try {
    const conn = await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hgdaqk5.mongodb.net/`);
    console.log(`Connected To Mongodb Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Erorr ${error}`);
  }
};

export default connectDB;
