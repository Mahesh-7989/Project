require("dotenv").config();
const mongoose = require("mongoose");

const connectionOfDb = () => {
  console.log("MONGO_URL:", process.env.MONGO_URL); // debug print
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectionOfDb;
