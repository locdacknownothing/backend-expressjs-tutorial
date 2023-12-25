const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

function connect() {
  try {
    const dbConnection =
      process.env.DB_URL || "mongodb://localhost:27017/be_tutorial_dev";
    mongoose.connect(dbConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connection is successful!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
