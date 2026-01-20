const express = require("express");
const router = express.Router();
const { Protected } = require("../middleware/auth.middleware");
const {getEmployees} = require("../controllers/employee.controller");
const {createEmployee} = require("../controllers/employee.controller");
const {updateEmployee} = require("../controllers/employee.controller");

router.get("/", Protected, getEmployees);
router.post("/", Protected, createEmployee);
router.patch("/:id", Protected, updateEmployee);

module.exports = router;