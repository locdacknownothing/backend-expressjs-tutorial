const express = require("express");
const router = express.Router();
const coursesController = require("../app/controllers/CoursesController");

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.post("/handle-actions", coursesController.handleActions);
router.get("/:id/edit", coursesController.edit);
router.patch("/:id/restore", coursesController.restore);
router.delete("/:id/force", coursesController.forceDestroy);
router.put("/:id", coursesController.update);
router.delete("/:id", coursesController.delete);
router.get("/:slug", coursesController.show);

module.exports = router;
