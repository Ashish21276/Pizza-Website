const mongoose = require("mongoose");

const url =
  "mongodb+srv://ashish:ashish@cluster0.rsg9a.mongodb.net/pizzadetail?retryWrites=true&w=majority";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to database successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToDatabase;
