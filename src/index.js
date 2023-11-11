const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");

const app = express();
const PORT = 3000;
const route = require("./routes");
const db = require("./config/db");

// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse body from form submit
app.use(express.urlencoded({ extended: true }));

// Middleware to parse body from request to json format
app.use(express.json());

// Middleware to log http requests
// app.use(morgan("combined"));

// Middleware for HTTP methods override
app.use(methodOverride("_method"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "assets\\views"));

app.listen(PORT, () => {
  console.log(`API is available on http://localhost:${PORT}`);
});

// Routes init
route(app);
