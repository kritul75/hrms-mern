const express = require("express");
const router = express.Router();
const { Protected } = require("../middleware/auth.middleware");
const {restrictTo} = require("../middleware/role.middleware");
const {getEmployees} = require("../controllers/employee.controller");
const {createEmployee} = require("../controllers/employee.controller");
const {updateEmployee} = require("../controllers/employee.controller");

//making routes protected and restricting some routes to HR only using middle wares
router.use(Protected);
router.use(restrictTo("hr"));

router.get("/", getEmployees);
router.post("/", createEmployee);
router.patch("/:id", updateEmployee);

module.exports = router;