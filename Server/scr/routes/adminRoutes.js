const express = require("express");
const router = express.Router();
const apply_route_middleware = require("../middleware/routeMiddleware")
const adimnController = require("../controllers/adminController")

router.get("/all_users",apply_route_middleware,adimnController.all_user)
router.get("/filter_user",apply_route_middleware,adimnController.filter_user)
router.delete("/delete_course",apply_route_middleware,adimnController.delete_course)


module.exports = router