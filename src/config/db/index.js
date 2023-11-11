const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Tutorial_be_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connect successfully!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
