const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/home";
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDB;