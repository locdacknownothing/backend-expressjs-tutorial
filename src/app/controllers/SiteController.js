const { multipleMongooseToObject } = require("../../utils/mongoose");
const Course = require("../models/Course");

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res, next) {
    const query = req.query.q || "";
    Course.find({ title: { $regex: query, $options: "i" } })
      .then((courses) => {
        res.render("search", {
          courses: multipleMongooseToObject(courses),
          query: query,
        });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
