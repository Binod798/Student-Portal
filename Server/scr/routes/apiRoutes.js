const express = require("express");
const router = express.Router();
const courseEnrollController = require("../controllers/courseEnrollController")
const apply_middle_ware = require("../middleware/routeMiddleware")

router.post("/enroll_course", apply_middle_ware,courseEnrollController.enrollCourse)
router.get("/all_courses",apply_middle_ware,courseEnrollController.all_courses)

module.exports = router