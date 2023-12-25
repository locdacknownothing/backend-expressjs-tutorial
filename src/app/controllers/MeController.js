const { multipleMongooseToObject } = require("../../utils/mongoose");
const Course = require("../models/Course");

class MeController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    let coursesQuery = Course.find({});

    if (req.query.hasOwnProperty("_sort") && req.query.type !== "default") {
      coursesQuery = coursesQuery.sort({
        [req.query.column]: req.query.type,
      });
    }

    Promise.all([
      Course.countDocumentsWithDeleted({
        deleted: true,
      }),
      coursesQuery,
    ]).then(([count, courses]) => {
      res.render("me/stored_courses", {
        courses: multipleMongooseToObject(courses),
        count: count,
      });
    });
  }

  // [GET] /deleted/courses
  deletedCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render("me/deleted_courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
