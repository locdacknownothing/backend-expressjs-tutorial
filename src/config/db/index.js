const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

function connect() {
  try {
    mongoose.connect(
      process.env.DB_URL || "mongodb://127.0.0.1:27017/be_tutorial_dev",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB connect successfully!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
