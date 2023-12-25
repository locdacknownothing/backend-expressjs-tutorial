const { mongooseToObject } = require("../../utils/mongoose");
const Course = require("../models/Course");

class CoursesController {
  // [GET] /:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // [GET] /create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /store
  store(req, res, next) {
    req.body.image = "https://files.fullstack.edu.vn/f8-prod/courses/6.png";
    Course.create(req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [GET] /:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // [PUT] /:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /:id
  delete(req, res, next) {
    // overrided by mongoose-delete
    Course.delete({ _id: req.params.id }, req.body)
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [PATCH] /:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [POST] /handle-actions
  handleActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } }, req.body)
          .then(() => res.redirect("back"))
          .catch(next);

        break;
      default:
        res.json({ message: "Action is invalid!" });
    }
  }
}

module.exports = new CoursesController();
