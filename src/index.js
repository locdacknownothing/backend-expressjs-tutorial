const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();
const route = require("./routes");
const db = require("./config/db");
const sortMiddleware = require("./app/middlewares/sortMiddleware");

const PORT = process.env.PORT || 3000;

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

// Custom middlewares
app.use(sortMiddleware);

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      sortable: (column, _sort) => {
        const sortedType = column === _sort.column ? _sort.type : "default";

        const icons = {
          default: "/images/sort-solid.svg",
          asc: "/images/arrow-up-short-wide-solid.svg",
          desc: "/images/arrow-up-wide-short-solid.svg",
        };

        const types = {
          default: "asc",
          asc: "desc",
          desc: "default",
        };

        return `
          <a href="?_sort&column=${column}&type=${types[sortedType]}">
            <img src="${icons[sortedType]}" alt="" />
          </a>`;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/assets/views"));

app.listen(PORT, () => {
  console.log(`API is available on http://localhost:${PORT}`);
});

// Routes init
route(app);
