const { multipleMongooseToObject } = require("../../utils/mongoose");
const Course = require("../models/Course");

class MeController {
  // [GET] /
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored_courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
